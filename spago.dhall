{-
Welcome to a Spago project!
You can edit this file as you like.
-}
{ name = "cardano-transaction-lib"
, dependencies =
  [ "aeson"
  , "argonaut-codecs"
  , "aff"
  , "aff-promise"
  , "aff-retry"
  , "affjax"
  , "argonaut"
  , "arraybuffer-types"
  , "arrays"
  , "avar"
  , "bifunctors"
  , "bigints"
  , "checked-exceptions"
  , "console"
  , "control"
  , "datetime"
  , "debug"
  , "effect"
  , "either"
  , "encoding"
  , "enums"
  , "exceptions"
  , "foldable-traversable"
  , "foreign"
  , "foreign-object"
  , "functions"
  , "gen"
  , "heterogeneous"
  , "http-methods"
  , "identity"
  , "integers"
  , "js-date"
  , "lattice"
  , "lists"
  , "literals"
  , "math"
  , "maybe"
  , "medea"
  , "media-types"
  , "monad-logger"
  , "mote"
  , "newtype"
  , "noble-secp256k1"
  , "node-buffer"
  , "node-child-process"
  , "node-fs"
  , "node-fs-aff"
  , "node-path"
  , "node-process"
  , "node-readline"
  , "node-streams"
  , "nonempty"
  , "now"
  , "numbers"
  , "optparse"
  , "ordered-collections"
  , "orders"
  , "parallel"
  , "partial"
  , "posix-types"
  , "prelude"
  , "profunctor"
  , "profunctor-lenses"
  , "purescript-toppokki"
  , "quickcheck"
  , "quickcheck-combinators"
  , "quickcheck-laws"
  , "rationals"
  , "record"
  , "refs"
  , "safe-coerce"
  , "spec"
  , "spec-quickcheck"
  , "strings"
  , "stringutils"
  , "tailrec"
  , "these"
  , "transformers"
  , "tuples"
  , "typelevel"
  , "typelevel-prelude"
  , "uint"
  , "undefined"
  , "unfoldable"
  , "untagged-union"
  , "variant"
  ]
, packages = ./packages.dhall
, sources =
  [ "src/**/*.purs"
  , "test/**/*.purs"
  , "examples/**/*.purs"
  , "templates/ctl-scaffold/src/**/*.purs"
  , "templates/ctl-scaffold/test/**/*.purs"
  , "templates/ctl-scaffold/exe/**/*.purs"
  ]
}
