-- | This module balances and signs two transactions at once and demonstrates
-- | the `withBalancedandSignedTxs` bracket. The point is that two different
-- | Utxos will be used for these transactions.
module Examples.SignMultiple (main) where

import Contract.Prelude

import Contract.Address
  ( NetworkId(TestnetId)
  , ownPaymentPubKeyHash
  , ownStakePubKeyHash
  )
import Contract.Monad
  ( Contract
  , ConfigParams(ConfigParams)
  , LogLevel(Trace)
  , defaultDatumCacheWsConfig
  , defaultOgmiosWsConfig
  , defaultServerConfig
  , launchAff_
  , liftedE
  , liftedM
  , logInfo'
  , mkContractConfig
  , runContract_
  , throwContractError
  )
import Control.Monad.Reader (asks)
import Effect.Ref as Ref
import Contract.ScriptLookups as Lookups
import Contract.Transaction
  ( BalancedSignedTransaction
  , TransactionHash
  , awaitTxConfirmed
  , submit
  , withBalancedAndSignedTxs
  )
import Contract.TxConstraints as Constraints
import Contract.Value as Value
import Contract.Wallet (mkNamiWalletAff)
import Data.BigInt as BigInt
import Types.UsedTxOuts (TxOutRefCache)
import Contract.Test.Feedback (publishTestFeedback)

getLockedInputs :: forall (r :: Row Type). Contract r TxOutRefCache
getLockedInputs = do
  cache <- asks (_.usedTxOuts <<< unwrap)
  liftEffect $ Ref.read $ unwrap cache

main :: Effect Unit
main = launchAff_ $ do
  wallet <- Just <$> mkNamiWalletAff
  cfg <- mkContractConfig $ ConfigParams
    { ogmiosConfig: defaultOgmiosWsConfig
    , datumCacheConfig: defaultDatumCacheWsConfig
    , ctlServerConfig: defaultServerConfig
    , networkId: TestnetId
    , logLevel: Trace
    , extraConfig: {}
    , wallet
    }

  runContract_ cfg $ do
    logInfo' "Running Examples.SignMultiple"
    pkh <- liftedM "Failed to get own PKH" ownPaymentPubKeyHash
    skh <- liftedM "Failed to get own SKH" ownStakePubKeyHash

    let
      constraints :: Constraints.TxConstraints Void Void
      constraints = Constraints.mustPayToPubKeyAddress pkh skh
        $ Value.lovelaceValueOf
        $ BigInt.fromInt 2_000_000

      lookups :: Lookups.ScriptLookups Void
      lookups = mempty

    ubTx1 <- liftedE $ Lookups.mkUnbalancedTx lookups constraints
    ubTx2 <- liftedE $ Lookups.mkUnbalancedTx lookups constraints

    txIds <- withBalancedAndSignedTxs [ ubTx1, ubTx2 ] $ \txs -> do
      locked <- getLockedInputs
      logInfo' $ "Locked inputs inside bracket (should be nonempty): " <> show
        locked
      traverse submitAndLog txs

    locked <- getLockedInputs
    logInfo' $ "Locked inputs after bracket (should be empty): " <> show locked

    case txIds of
      [ txId1, txId2 ] -> do
        awaitTxConfirmed txId1
        logInfo' $ "Tx 1 submitted successfully!"
        awaitTxConfirmed txId2
        logInfo' $ "Tx 2 submitted successfully!"
      _ -> throwContractError "Unexpected error - no transaction IDs"

  publishTestFeedback true

  where
  submitAndLog
    :: forall (r :: Row Type)
     . BalancedSignedTransaction
    -> Contract r TransactionHash
  submitAndLog bsTx = do
    txId <- submit bsTx
    logInfo' $ "Tx ID: " <> show txId
    pure txId

