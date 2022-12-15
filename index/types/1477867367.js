// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1477867367"] = [{"values":[{"sourceSpan":{"start":[26,1],"name":".spago/test-unit/v16.0.0/src/Test/Unit/Main.purs","end":[26,31]},"score":4,"packageInfo":{"values":["test-unit"],"tag":"Package"},"name":"run","moduleName":"Test.Unit.Main","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect","Aff"],"Aff"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[64,1],"name":"test/Parser.purs","end":[64,48]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"convertJsonArray","moduleName":"Test.Ctl.Parser","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Aeson"],"Aeson"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[83,1],"name":".spago/optparse/v4.1.0/src/Options/Applicative/Internal.purs","end":[83,46]},"score":0,"packageInfo":{"values":["optparse"],"tag":"Package"},"name":"contextNames","moduleName":"Options.Applicative.Internal","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Options","Applicative","Types"],"Context"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Prim"],"String"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[88,1],"name":".spago/node-process/v8.2.0/src/Node/Process.purs","end":[88,39]},"score":3,"packageInfo":{"values":["node-process"],"tag":"Package"},"name":"nextTick","moduleName":"Node.Process","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Register a callback to run as soon as the current event loop runs to\ncompletion.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[53,1],"name":".spago/node-process/v8.2.0/src/Node/Process.purs","end":[53,58]},"score":3,"packageInfo":{"values":["node-process"],"tag":"Package"},"name":"onBeforeExit","moduleName":"Node.Process","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Register a callback to be performed when the event loop empties, and\nNode.js is about to exit. Asynchronous calls can be made in the callback,\nand if any are made, it will cause the process to continue a little longer.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[53,1],"name":".spago/effect/v3.0.0/src/Effect.purs","end":[53,55]},"score":50,"packageInfo":{"values":["effect"],"tag":"Package"},"name":"untilE","moduleName":"Effect","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Prim"],"Boolean"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Loop until a condition becomes `true`.\n\n`untilE b` is an effectful computation which repeatedly runs the effectful\ncomputation `b`, until its return value is `true`.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[61,1],"name":".spago/strings/v5.0.0/src/Data/String/NonEmpty/CodeUnits.purs","end":[61,52]},"score":16,"packageInfo":{"values":["strings"],"tag":"Package"},"name":"fromCharArray","moduleName":"Data.String.NonEmpty.CodeUnits","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Prim"],"Char"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Creates a `NonEmptyString` from a character array `String`, returning\n`Nothing` if the input is empty.\n\n```purescript\nfromCharArray [] = Nothing\nfromCharArray ['a', 'b', 'c'] = Just (NonEmptyString \"abc\")\n```\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[52,1],"name":".spago/strings/v5.0.0/src/Data/String/NonEmpty/CodePoints.purs","end":[52,62]},"score":16,"packageInfo":{"values":["strings"],"tag":"Package"},"name":"fromCodePointArray","moduleName":"Data.String.NonEmpty.CodePoints","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Data","String","CodePoints"],"CodePoint"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Data","String","NonEmpty","Internal"],"NonEmptyString"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[49,1],"name":"src/Internal/Types/RawBytes.purs","end":[49,52]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"rawBytesFromIntArray","moduleName":"Ctl.Internal.Types.RawBytes","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","RawBytes"],"RawBytes"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[51,1],"name":"src/Internal/Types/CborBytes.purs","end":[51,54]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"cborBytesFromIntArray","moduleName":"Ctl.Internal.Types.CborBytes","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","CborBytes"],"CborBytes"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[106,1],"name":"src/Internal/Types/ByteArray.purs","end":[106,54]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"byteArrayFromIntArray","moduleName":"Ctl.Internal.Types.ByteArray","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Prim"],"Int"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","ByteArray"],"ByteArray"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"A safer version of `byteArrayFromIntArrayUnsafe` that checks that elements are in range 0-255.\n"}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[156,1],"name":"src/Internal/Serialization/WitnessSet.purs","end":[156,68]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"convertVkeywitnesses","moduleName":"Ctl.Internal.Serialization.WitnessSet","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Cardano","Types","Transaction"],"Vkeywitness"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Types"],"Vkeywitnesses"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[118,1],"name":"src/Internal/Serialization/WitnessSet.purs","end":[118,57]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"convertRedeemers","moduleName":"Ctl.Internal.Serialization.WitnessSet","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Cardano","Types","Transaction"],"Redeemer"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Types"],"Redeemers"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[66,1],"name":"src/Internal/Serialization/PlutusData.purs","end":[66,57]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"packPlutusList","moduleName":"Ctl.Internal.Serialization.PlutusData","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Array"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","PlutusData"],"PlutusData"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Serialization","Types"],"PlutusList"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[88,1],"name":"src/Internal/BalanceTx/Types.purs","end":[88,65]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"askCostModelsForLanguages","moduleName":"Ctl.Internal.BalanceTx.Types","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Set"],"Set"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","Scripts"],"Language"]}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Ctl","Internal","BalanceTx","Types"],"BalanceTxM"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Cardano","Types","Transaction"],"Costmdls"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[21,1],"name":"examples/Wallet.purs","end":[21,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"example","moduleName":"Ctl.Examples.Wallet","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"ConfigParams"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[49,1],"name":"examples/Utxos.purs","end":[49,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"example","moduleName":"Ctl.Examples.Utxos","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"ConfigParams"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[40,1],"name":"examples/TxChaining.purs","end":[40,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"example","moduleName":"Ctl.Examples.TxChaining","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"ConfigParams"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[115,1],"name":"examples/SignMultiple.purs","end":[115,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"example","moduleName":"Ctl.Examples.SignMultiple","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"ConfigParams"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[19,1],"name":"examples/SignData.purs","end":[19,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"example","moduleName":"Ctl.Examples.SignData","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"ConfigParams"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[34,1],"name":"examples/SendsToken.purs","end":[34,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"example","moduleName":"Ctl.Examples.SendsToken","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"ConfigParams"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[32,1],"name":"examples/SatisfiesAnyOf.purs","end":[32,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"example","moduleName":"Ctl.Examples.SatisfiesAnyOf","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"ConfigParams"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[41,1],"name":"examples/PlutusV2/ReferenceScripts.purs","end":[41,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"example","moduleName":"Ctl.Examples.PlutusV2.ReferenceScripts","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"ConfigParams"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[69,1],"name":"examples/PlutusV2/ReferenceInputsAndScripts.purs","end":[69,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"example","moduleName":"Ctl.Examples.PlutusV2.ReferenceInputsAndScripts","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"ConfigParams"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[51,1],"name":"examples/PlutusV2/ReferenceInputs.purs","end":[51,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"example","moduleName":"Ctl.Examples.PlutusV2.ReferenceInputs","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"ConfigParams"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[34,1],"name":"examples/PlutusV2/OneShotMinting.purs","end":[34,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"example","moduleName":"Ctl.Examples.PlutusV2.OneShotMinting","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"ConfigParams"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[49,1],"name":"examples/PlutusV2/InlineDatum.purs","end":[49,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"example","moduleName":"Ctl.Examples.PlutusV2.InlineDatum","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"ConfigParams"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[39,1],"name":"examples/PlutusV2/AlwaysSucceeds.purs","end":[39,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"example","moduleName":"Ctl.Examples.PlutusV2.AlwaysSucceeds","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"ConfigParams"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[46,1],"name":"examples/Pkh2Pkh.purs","end":[46,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"example","moduleName":"Ctl.Examples.Pkh2Pkh","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"ConfigParams"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[61,1],"name":"examples/OneShotMinting.purs","end":[61,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"example","moduleName":"Ctl.Examples.OneShotMinting","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"ConfigParams"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[81,1],"name":"examples/NativeScriptMints.purs","end":[81,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"example","moduleName":"Ctl.Examples.NativeScriptMints","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"ConfigParams"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[73,1],"name":"examples/MintsMultipleTokens.purs","end":[73,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"example","moduleName":"Ctl.Examples.MintsMultipleTokens","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"ConfigParams"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[48,1],"name":"examples/Lose7Ada.purs","end":[48,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"example","moduleName":"Ctl.Examples.Lose7Ada","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"ConfigParams"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[43,1],"name":"examples/IncludeDatum.purs","end":[43,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"example","moduleName":"Ctl.Examples.IncludeDatum","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"ConfigParams"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[48,1],"name":"examples/Datums.purs","end":[48,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"example","moduleName":"Ctl.Examples.Datums","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"ConfigParams"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[37,1],"name":"examples/Cip30.purs","end":[37,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"example","moduleName":"Ctl.Examples.Cip30","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"ConfigParams"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[26,1],"name":"examples/AwaitTxConfirmedWithTimeout.purs","end":[26,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"example","moduleName":"Ctl.Examples.AwaitTxConfirmedWithTimeout","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"ConfigParams"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[56,1],"name":"examples/AlwaysSucceeds.purs","end":[56,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"example","moduleName":"Ctl.Examples.AlwaysSucceeds","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"ConfigParams"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"},{"values":[{"sourceSpan":{"start":[56,1],"name":"examples/AlwaysMints.purs","end":[56,42]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"example","moduleName":"Ctl.Examples.AlwaysMints","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Contract","Monad"],"ConfigParams"]},{"tag":"REmpty","contents":{}}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Effect"],"Effect"]},{"tag":"TypeConstructor","contents":[["Data","Unit"],"Unit"]}]}]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":null}],"tag":"SearchResult"}]