-- | This module demonstrates how the `Contract` interface can be used to build,
-- | balance, and submit a smart-contract transaction. It creates a transaction
-- | that pays two Ada to the `AlwaysSucceeds` script address
module Ctl.Examples.PlutusV2.AlwaysSucceeds
  ( main
  , example
  , contract
  , alwaysSucceedsScriptV2
  ) where

import Contract.Prelude

import Contract.Config (ConfigParams, testnetNamiConfig)
import Contract.Log (logInfo')
import Contract.Monad
  ( Contract
  , launchAff_
  , runContract
  )
import Contract.Scripts (Validator(..), validatorHash)
import Contract.Test.E2E (publishTestFeedback)
import Contract.TextEnvelope
  ( liftEitherTextEnvelopeDecodeError
  , plutusScriptV2FromEnvelope
  )
import Contract.Transaction
  ( awaitTxConfirmed
  )
import Ctl.Examples.AlwaysSucceeds
  ( payToAlwaysSucceeds
  , spendFromAlwaysSucceeds
  )

main :: Effect Unit
main = example testnetNamiConfig

contract :: Contract () Unit
contract = do
  logInfo' "Running Examples.PlutusV2.AlwaysSucceeds"
  validator <- alwaysSucceedsScriptV2
  let vhash = validatorHash validator
  logInfo' "Attempt to lock value"
  txId <- payToAlwaysSucceeds vhash
  awaitTxConfirmed txId
  logInfo' "Tx submitted successfully, Try to spend locked values"
  spendFromAlwaysSucceeds vhash validator txId

example :: ConfigParams () -> Effect Unit
example cfg = launchAff_ do
  runContract cfg contract
  publishTestFeedback true

foreign import alwaysSucceeds :: String

alwaysSucceedsScriptV2 :: Contract () Validator
alwaysSucceedsScriptV2 =
  liftEitherTextEnvelopeDecodeError
    $ Validator
    <$> plutusScriptV2FromEnvelope alwaysSucceeds
