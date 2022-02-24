module Test.Transaction (suite) where

import Prelude
import Undefined

import Data.BigInt as BigInt
import Data.Maybe (Maybe(Just, Nothing))
import Data.Newtype (unwrap)
import Effect.Aff (Aff)
import Effect.Class (liftEffect)
import Effect.Exception (throw)
import Deserialization.PlutusData as Deserialization.PlutusData
import Serialization.WitnessSet as Serialization.WitnessSet
import Mote (group, test)
import Test.Spec.Assertions (shouldEqual)
import TestM (TestPlanM)
import Transaction (attachDatum)
import Types.Transaction
  ( Transaction(Transaction)
  , TransactionWitnessSet(TransactionWitnessSet)
  )
import Types.PlutusData (PlutusData(Integer))

suite :: TestPlanM Unit
suite = group "attach datums to tx"
  $ test "datum should be correctly attached" testAttachDatum

testAttachDatum :: Aff Unit
testAttachDatum = liftEffect (attachDatum datum tx) >>= case _ of
  Nothing -> liftEffect $ throw "Failed to attach datum"
  Just (Transaction { witness_set: TransactionWitnessSet ws }) -> do
    case ws.plutus_data of
      Just [ pd ] -> do
        pd' <- Deserialization.PlutusData.convertPlutusData
          <$> liftEffect (Serialization.WitnessSet.convertPlutusData pd)
        pd' `shouldEqual` Just datum
      _ -> liftEffect $ throw "Failed to attach datum"
  where
  tx :: Transaction
  tx = mempty

  datum = Integer $ BigInt.fromInt 1
