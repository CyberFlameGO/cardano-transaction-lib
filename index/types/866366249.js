// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["866366249"] = [{"values":[{"sourceSpan":{"start":[130,1],"name":".spago/these/v5.0.0/src/Data/These.purs","end":[130,58]},"score":1,"packageInfo":{"values":["these"],"tag":"Package"},"name":"fromThese","moduleName":"Data.These","info":{"values":[{"type":{"tag":"ForAll","contents":["a",{"tag":"ForAll","contents":["b",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"b"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","These"],"These"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Tuple"],"Tuple"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeVar","contents":"b"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Takes two default values and a `These` value. If the `These` value is\n`This` or `That`, the value wrapped in the `These` value and its\ncorresponding default value are wrapped into a `Tuple`.\nOtherwise, the values stored in the `Both` are rewrapped into a `Tuple`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[442,1],"name":".spago/ordered-collections/v2.0.2/src/Data/Map/Internal.purs","end":[442,60]},"score":5,"packageInfo":{"values":["ordered-collections"],"tag":"Package"},"name":"insert","moduleName":"Data.Map.Internal","info":{"values":[{"type":{"tag":"ForAll","contents":["k",{"tag":"ForAll","contents":["v",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"v"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Map","Internal"],"Map"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Insert or replace a key/value pair in a map\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[178,1],"name":".spago/unordered-collections/v2.1.4/src/Data/HashMap.purs","end":[178,73]},"score":0,"packageInfo":{"values":["unordered-collections"],"tag":"Package"},"name":"insert","moduleName":"Data.HashMap","info":{"values":[{"type":{"tag":"ForAll","contents":["k",{"tag":"ForAll","contents":["v",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Hashable"],"Hashable"],"constraintArgs":[{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"v"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","HashMap"],"HashMap"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","HashMap"],"HashMap"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Insert or replace a value.\n\n`lookup k (insert k v m) == Just v`\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[155,1],"name":".spago/arrays/v6.0.1/src/Data/Array/ST.purs","end":[155,75]},"score":17,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"poke","moduleName":"Data.Array.ST","info":{"values":[{"type":{"tag":"ForAll","contents":["h",{"tag":"ForAll","contents":["a",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","ST"],"STArray"]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","ST","Internal"],"ST"]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Change the value at the specified index in a mutable array.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[26,1],"name":".spago/arrays/v6.0.1/src/Data/Array/ST/Partial.purs","end":[32,15]},"score":17,"packageInfo":{"values":["arrays"],"tag":"Package"},"name":"poke","moduleName":"Data.Array.ST.Partial","info":{"values":[{"type":{"tag":"ForAll","contents":["h",{"tag":"ForAll","contents":["a",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Prim"],"Partial"],"constraintArgs":[]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"a"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Array","ST"],"STArray"]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","ST","Internal"],"ST"]},{"tag":"TypeVar","contents":"h"}]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Change the value at the specified index in a mutable array.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[76,1],"name":"src/Internal/Wallet/Cip30Mock.purs","end":[81,18]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"withCip30Mock","moduleName":"Ctl.Internal.Wallet.Cip30Mock","info":{"values":[{"type":{"tag":"ForAll","contents":["r",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Wallet","Key"],"KeyWallet"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Wallet","Cip30Mock"],"WalletMock"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"Contract"]},{"tag":"TypeVar","contents":"r"}]},{"tag":"TypeVar","contents":"a"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Construct a CIP-30 wallet mock that exposes `KeyWallet` functionality\nbehind a CIP-30 interface and uses Ogmios to submit Txs.\nThe wallet is injected directly to `window.cardano` object, under the\nname corresponding to provided `WalletMock`. It works even in NodeJS\n(we introduce a global `window` object and delete it afterwards).\n\nNote that this function will refuse to overwrite existing wallet\nwith the mock, so the users should disable their browser extensions\nbefore running it in the browser.\n\nNote that this function implements single-address light wallet logic, so\nit will have to be changed a lot to successfully mimic the behavior of\nmulti-address wallets, like Eternl.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[303,1],"name":"src/Internal/Types/TxConstraints.purs","end":[308,23]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"addTxIn","moduleName":"Ctl.Internal.Types.TxConstraints","info":{"values":[{"type":{"tag":"ForAll","contents":["i",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ForAll","contents":["o",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","Transaction"],"TransactionInput"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"i"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","TxConstraints"],"TxConstraints"]},{"tag":"TypeVar","contents":"i"}]},{"tag":"TypeVar","contents":"o"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","TxConstraints"],"TxConstraints"]},{"tag":"TypeVar","contents":"i"}]},{"tag":"TypeVar","contents":"o"}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Adds a `TransactionInput` as an input constraint with an arbitrary\nredeemer.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[34,1],"name":"src/Internal/Types/MultiMap.purs","end":[40,18]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"insert","moduleName":"Ctl.Internal.Types.MultiMap","info":{"values":[{"type":{"tag":"ForAll","contents":["k",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ForAll","contents":["v",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Ord"],"Ord"],"constraintArgs":[{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"v"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","MultiMap"],"MultiMap"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","MultiMap"],"MultiMap"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Inserts value. In case k exist the value is stored at the end of\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[127,1],"name":"src/Internal/Plutus/Types/AssocMap.purs","end":[127,61]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"insert","moduleName":"Ctl.Internal.Plutus.Types.AssocMap","info":{"values":[{"type":{"tag":"ForAll","contents":["k",{"tag":"ForAll","contents":["v",{"tag":"ConstrainedType","contents":[{"constraintClass":[["Data","Eq"],"Eq"],"constraintArgs":[{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"v"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Plutus","Types","AssocMap"],"Map"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","Plutus","Types","AssocMap"],"Map"]},{"tag":"TypeVar","contents":"k"}]},{"tag":"TypeVar","contents":"v"}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]