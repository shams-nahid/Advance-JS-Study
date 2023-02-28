**01. What are types in JS?**

- Primitive (Fundamental / primary types)
  - String
  - Number
  - Boolean
  - BigInteger
  - Undefined
  - Null
  - Symbol
- Non-primitive (reference / complex types)

**02. var vs let?**

`var` has hoisting and function scoped and can be redeclared.

`let` does not hoisted and block scoped and can not be redeclared.

**03. Coercion in JS?**

- String coercion
  - 3 + "3" = "33"
  - 3 - "3" = 0
  - "a" + "b" = "ab"
  - "a" - "b" = NaN
- Boolean coercion
  - falsy values: false, 0, 0n, -0, "", null, undefined, NaN
  - truthy values: anything other than falsy values

**04. Statically vs Dynamically typed language?**

- Statically
  - Types are defined earlier
  - Types are checked during compilation
- Dynamically
  - Do not require to define types beforehand
  - Types are checked during runtime

**05. Passed by value vs Passed by reference?**


