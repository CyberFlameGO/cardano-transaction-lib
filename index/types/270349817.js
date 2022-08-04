// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["270349817"] = [{"values":[{"sourceSpan":{"start":[162,1],"name":"src/Types/TypedTxOut.purs","end":[170,40]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"mkTypedTxOut","moduleName":"Types.TypedTxOut","info":{"values":[{"type":{"tag":"ForAll","contents":["validator",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ForAll","contents":["datum",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Types","TypedValidator"],"DatumType"],"constraintArgs":[{"tag":"TypeVar","contents":"validator"},{"tag":"TypeVar","contents":"datum"}]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["ToData"],"ToData"],"constraintArgs":[{"tag":"TypeVar","contents":"datum"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Serialization","Address"],"NetworkId"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Types","TypedValidator"],"TypedValidator"]},{"tag":"TypeVar","contents":"validator"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeVar","contents":"datum"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Cardano","Types","Value"],"Value"]}]},{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Data","Maybe"],"Maybe"]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Types","TypedTxOut"],"TypedTxOut"]},{"tag":"TypeVar","contents":"validator"}]},{"tag":"TypeVar","contents":"datum"}]}}]}]}]}]}]}]}]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Smart constructor to create a `TypedTxOut` from a network ID,\na correctly-typed data, script, an address, and a value. A smart\nconstructor is required because extra constraints are needed.\n`TransactionOutput` is tagged by a phantom type.\n"}],"tag":"SearchResult"}]