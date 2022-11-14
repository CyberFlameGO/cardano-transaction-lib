// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1223094262"] = [{"values":[{"sourceSpan":{"start":[342,1],"name":"src/Internal/QueryM.purs","end":[348,4]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"QueryRuntime","moduleName":"Ctl.Internal.QueryM","info":{"values":[{"type":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Record"]},{"tag":"RCons","contents":["ogmiosWs",{"tag":"TypeConstructor","contents":[["Ctl","Internal","QueryM"],"OgmiosWebSocket"]},{"tag":"RCons","contents":["datumCacheWs",{"tag":"TypeConstructor","contents":[["Ctl","Internal","QueryM"],"DatumCacheWebSocket"]},{"tag":"RCons","contents":["wallet",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"TypeConstructor","contents":[["Ctl","Internal","Wallet"],"Wallet"]}]},{"tag":"RCons","contents":["usedTxOuts",{"tag":"TypeConstructor","contents":[["Ctl","Internal","Types","UsedTxOuts"],"UsedTxOuts"]},{"tag":"RCons","contents":["pparams",{"tag":"TypeConstructor","contents":[["Ctl","Internal","QueryM","Ogmios"],"ProtocolParameters"]},{"tag":"REmpty","contents":{}}]}]}]}]}]}]},"arguments":[]}],"tag":"TypeSynonymResult"},"hashAnchor":"t","comments":"Reusable part of `QueryRuntime` that can be shared between many `QueryM`\n instances running in parallel.\n\nIncludes:\n- WebSocket connections\n- A wallet connection\n- A data structure to keep UTxOs that has already been spent\n- Current protocol parameters\n"}],"tag":"SearchResult"}]