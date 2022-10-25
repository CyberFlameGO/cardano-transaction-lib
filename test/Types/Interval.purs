module Test.Ctl.Types.Interval
  ( suite
  , eraSummariesFixture
  , systemStartFixture
  ) where

import Prelude

import Aeson (class DecodeAeson, decodeJsonString, printJsonDecodeError)
import Contract.Numeric.BigNum (fromInt) as BigNum
import Control.Monad.Error.Class (liftEither)
import Control.Monad.Except (throwError)
import Ctl.Internal.QueryM.Ogmios (EraSummaries, SystemStart)
import Ctl.Internal.Serialization.Address (Slot(Slot))
import Ctl.Internal.Types.Interval
  ( POSIXTime(POSIXTime)
  , PosixTimeToSlotError(PosixTimeBeforeSystemStart)
  , always
  , from
  , intervalToPlutusInterval
  , member
  , mkFiniteInterval
  , never
  , plutusIntervalToInterval
  , posixTimeToSlot
  , slotToPosixTime
  , to
  )
import Data.Bifunctor (lmap)
import Data.BigInt (fromInt, fromString) as BigInt
import Data.Either (Either(Left, Right), either)
import Data.Maybe (fromJust)
import Data.Traversable (traverse_)
import Data.Tuple.Nested (type (/\), (/\))
import Effect (Effect)
import Effect.Exception (error)
import Mote (group, test)
import Node.Encoding (Encoding(UTF8))
import Node.FS.Sync (readTextFile)
import Node.Path (concat) as Path
import Partial.Unsafe (unsafePartial)
import Test.Ctl.TestM (TestPlanM)
import Test.QuickCheck (Result(Success, Failed), quickCheck, (<?>), (===))
import Test.QuickCheck.Combinators ((&=&))
import Test.Spec.Assertions (shouldEqual)

suite :: TestPlanM (EraSummaries -> SystemStart -> Effect Unit) Unit
suite = do
  group "Interval" do
    group "EraSumaries related" do
      test "Inverse posixTimeToSlot >>> slotToPosixTime " $
        testPosixTimeToSlot
      test "Inverse slotToPosixTime >>> posixTimeToSlot " $
        testSlotToPosixTime
      test "PosixTimeToSlot errors" $ testPosixTimeToSlotError
    group "Properties" do
      test "Inverse plutusIntervalToInterval <<< intervalToPlutusInterval" $
        liftToTest testIntervalConvertion
      test "UpperRay" $ liftToTest testUpperRay
      test "LowerRay" $ liftToTest testLowerRay
      test "testAlways" $ liftToTest testAlways
      test "testEmpty" $ liftToTest testEmpty
      test "testFiniteInterval" $ liftToTest testFiniteInterval

loadOgmiosFixture
  :: forall (a :: Type). DecodeAeson a => String -> String -> Effect a
loadOgmiosFixture query hash = do
  contents <- readTextFile UTF8 path
  liftEither $ lmap
    (error <<< ((path <> "\n  ") <> _) <<< printJsonDecodeError)
    (decodeJsonString contents)
  where
  path :: String
  path = Path.concat
    [ "fixtures", "test", "ogmios", query <> "-" <> hash <> ".json" ]

-- To update the eraSummaries and systemStart fixtures, run
-- `spago run --main Test.Ogmios.GenerateFixtures`
-- and take the hashes from the result and insert them here. Make sure the
-- newly generated fixtures are stored in source control, i.e. git.

eraSummariesFixture :: Effect EraSummaries
eraSummariesFixture =
  loadOgmiosFixture "eraSummaries" "bbf8b1d7d2487e750104ec2b5a31fa86"

systemStartFixture :: Effect SystemStart
systemStartFixture =
  loadOgmiosFixture "systemStart" "ed0caad81f6936e0c122ef6f3c7de5e8"

testPosixTimeToSlot :: EraSummaries -> SystemStart -> Effect Unit
testPosixTimeToSlot eraSummaries sysStart = do
  let
    -- Tests currently pass "exactly" for seconds precision, which makes sense
    -- given converting to a Slot will round down to the near slot length
    -- (mostly 1s). If it rounds down and is the end slot, then a check is in
    -- place that any "extra" time is zero.
    -- We can allow for Millseconds as (off chain) input if we assume
    -- the seconds provided by Ogmios are exact, which seems to be the case
    -- here https://cardano.stackexchange.com/questions/7034/how-to-convert-posixtime-to-slot-number-on-cardano-testnet/7035#7035
    -- `timeWhenSlotChangedTo1Sec = POSIXTime 1595967616000` - exactly
    -- divisible by 1 second.

    -- *Testing far into the future note during hardforks:*
    -- It's worth noting that testing values "in" the recent era summary may
    -- fail during hardforks. This is because the last element's `end`
    -- field may be non null, meaning there is a limit to how far we can go
    -- into the future for reliable slot/time conversion (an exception like
    -- `CannotFindSlotInEraSummaries` is raised in this case).
    -- This `end` field presumably changes to `null` after the the initial
    -- period is over and things stabilise.
    -- For example, at the time of writing (start of Vasil hardfork during
    -- Babbage era), the *last* era summary element is
    -- ```
    -- {
    --   "start": {
    --     "time": 92880000,
    --     "slot": 62510400,
    --     "epoch": 215
    --   },
    --   "end": {
    --     "time": 93312000,
    --     "slot": 62942400,
    --     "epoch": 216
    --   },
    --   "parameters": {
    --     "epochLength": 432000,
    --     "slotLength": 1,
    --     "safeZone": 129600
    --   }
    -- }
    -- ```
    -- Note, `end` isn't null. This means any time "after" 93312000 will raise
    -- `CannotFindSlotInEraSummaries` an exception. So adding a time far
    -- into the future for `posixTimes` below will raise this exception.
    -- Notice also how 93312000 - 92880000 is a relatively small period of
    -- time so I expect this will change to `null` once things stabilise.
    posixTimes = mkPosixTime <$>
      [ "1603636353000"
      , "1613636755000"
      ]
  traverse_ (idTest eraSummaries sysStart identity) posixTimes
  -- With Milliseconds, we generally round down, provided the aren't at the
  -- end  with non-zero excess:
  idTest eraSummaries sysStart
    (const $ mkPosixTime "1613636754000")
    (mkPosixTime "1613636754999")
  idTest eraSummaries sysStart
    (const $ mkPosixTime "1613636754000")
    (mkPosixTime "1613636754500")
  idTest eraSummaries sysStart
    (const $ mkPosixTime "1613636754000")
    (mkPosixTime "1613636754499")
  where
  idTest
    :: EraSummaries
    -> SystemStart
    -> (POSIXTime -> POSIXTime)
    -> POSIXTime
    -> Effect Unit
  idTest es ss transf posixTime = do
    posixTimeToSlot es ss posixTime >>= case _ of
      Left err -> throwError $ error $ show err
      Right slot -> do
        ePosixTime <- slotToPosixTime es ss slot
        either (throwError <<< error <<< show) (shouldEqual $ transf posixTime)
          ePosixTime

mkPosixTime :: String -> POSIXTime
mkPosixTime = POSIXTime <<< unsafePartial fromJust <<< BigInt.fromString

testSlotToPosixTime :: EraSummaries -> SystemStart -> Effect Unit
testSlotToPosixTime eraSummaries sysStart = do
  -- See *Testing far into the future note during hardforks:* for details on
  -- how far into the future we test with slots when a hardfork occurs.
  let
    slots = mkSlot <$>
      [ 58278567
      , 48272312
      , 39270783
      , 957323
      , 34952
      , 7532
      , 232
      , 1
      ]
  traverse_ (idTest eraSummaries sysStart) slots
  where
  idTest :: EraSummaries -> SystemStart -> Slot -> Effect Unit
  idTest es ss slot = do
    slotToPosixTime es ss slot >>= case _ of
      Left err -> throwError $ error $ show err
      Right posixTime -> do
        eSlot <- posixTimeToSlot es ss posixTime
        either (throwError <<< error <<< show) (shouldEqual slot) eSlot

  mkSlot :: Int -> Slot
  mkSlot = Slot <<< BigNum.fromInt

testPosixTimeToSlotError :: EraSummaries -> SystemStart -> Effect Unit
testPosixTimeToSlotError eraSummaries sysStart = do
  let
    posixTime = mkPosixTime "1000"
  -- Some difficulty reproducing all the errors
  errTest eraSummaries sysStart
    posixTime
    (PosixTimeBeforeSystemStart posixTime)
  where
  errTest
    :: EraSummaries
    -> SystemStart
    -> POSIXTime
    -> PosixTimeToSlotError
    -> Effect Unit
  errTest es ss posixTime expectedErr = do
    posixTimeToSlot es ss posixTime >>= case _ of
      Left err -> err `shouldEqual` expectedErr
      Right _ ->
        throwError $ error $ "Test should have failed giving: " <> show
          expectedErr

testIntervalConvertion :: Effect Unit
testIntervalConvertion = quickCheck test
  where
  test :: (Int /\ Int) -> Result
  test (in1 /\ in2) =
    let
      start' = min in1 in2
      end' = max in1 in2
      inter = mkFiniteInterval start' end'
    in
      inter ===
        (plutusIntervalToInterval <<< intervalToPlutusInterval) inter

liftToTest :: Effect Unit -> (EraSummaries -> SystemStart -> Effect Unit)
liftToTest = pure <<< pure

withMsg :: String -> Result -> Result
withMsg _ Success = Success
withMsg msg (Failed original) = Failed $ "(" <> msg <> ") : " <> original

-- All this test can be generalized to use : 
-- forall (a::Type) . Arbitrary a => Ord a => Ring a 

testUpperRay :: Effect Unit
testUpperRay = quickCheck test
  where
  test :: Int -> Result
  test value =
    let
      ray = from value
      isIn = value `member` ray <?> "value is member of ray"
      notIn = not ((sub value one) `member` ray)
        <?> "check that " <> show (sub value one) <> " is not in ray"
    in
      withMsg
        ("value : " <> show value <> ", ray :" <> show ray)
        $ isIn &=& notIn

testLowerRay :: Effect Unit
testLowerRay = quickCheck test
  where
  test :: Int -> Result
  test value =
    let
      ray = to value
      isIn = value `member` ray <?> "value is member of ray"
      notIn = not ((add one value) `member` ray)
        <?> "check that " <> show (add one value) <> " is not in ray"
    in
      withMsg
        ("value : " <> show value <> ", ray :" <> show ray)
        $ isIn &=& notIn

testAlways :: Effect Unit
testAlways = quickCheck test
  where
  test :: Int -> Result
  test value = value `member` always
    <?> "check that " <> show value <> ", is in always"

testEmpty :: Effect Unit
testEmpty = quickCheck test
  where
  test :: Int -> Result
  test value = (not $ value `member` never)
    <?> "check that " <> show value <> ", isn't in empty"

testFiniteInterval :: Effect Unit
testFiniteInterval = quickCheck test
  where
  test :: (Int /\ Int) -> Result
  test (in1 /\ in2) =
    let
      start = BigInt.fromInt (min in1 in2)
      end = BigInt.fromInt (max in1 in2)
      inter = mkFiniteInterval start end
      startIn = start `member` inter <?> "start in interval"
      endIn = end `member` inter <?> "end in interval"
      beforeNotIn = (not $ (sub start one) `member` inter)
        <?> "values before start aren't in interval"
      afterNotIn = (not $ (add one end) `member` inter)
        <?> "values after end aren't in interval"
    in
      withMsg
        ( "start : " <> show start
            <> ", end : "
            <> show end
            <> ", interval :"
            <> show inter
        )
        $ startIn &=& endIn &=& beforeNotIn &=& afterNotIn
