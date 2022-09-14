// This file was generated by purescript-docs-search
window.DocsSearchTypeIndex["1457038827"] = [{"values":[{"sourceSpan":{"start":[76,1],"name":"src/Error.purs","end":[80,28]},"score":0,"packageInfo":{"values":[],"tag":"LocalPackage"},"name":"hushable","moduleName":"Error","info":{"values":[{"type":{"tag":"ForAll","contents":["v",{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Row"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ForAll","contents":["m",{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"TypeConstructor","contents":[["Prim"],"Type"]}]},{"tag":"ForAll","contents":["a",{"tag":"TypeConstructor","contents":[["Prim"],"Type"]},{"tag":"ConstrainedType","contents":[{"constraintClass":[["Control","Monad"],"Monad"],"constraintArgs":[{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Prim"],"Function"]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Except","Checked"],"ExceptV"]},{"tag":"TypeVar","contents":"v"}]},{"tag":"TypeVar","contents":"m"}]},{"tag":"TypeVar","contents":"a"}]}]},{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Except","Checked"],"ExceptV"]},{"tag":"TypeVar","contents":"v"}]},{"tag":"ParensInType","contents":{"tag":"TypeApp","contents":[{"tag":"TypeConstructor","contents":[["Control","Monad","Maybe","Trans"],"MaybeT"]},{"tag":"TypeVar","contents":"m"}]}}]},{"tag":"TypeVar","contents":"a"}]}]}]},null]},null]},null]}}],"tag":"ValueResult"},"hashAnchor":"v","comments":"Lifts underlying monad to MaybeT allowing hushing selected errors.\nExample:\n\n> hushNotImplemented\n>   :: forall (m :: Type -> Type) (r :: Row Type)\n>    . Monad m\n>   => ExceptV (NotImplementedError + r) m Int\n>   -> ExceptV r (MaybeT m) Int\n> hushNotImplemented m = hushable m # handleError\n>   { notImplementedError: \\_ -> hushedErr }\n\n"}],"tag":"SearchResult"}]