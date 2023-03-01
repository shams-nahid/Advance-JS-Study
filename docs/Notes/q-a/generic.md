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

In JS, primitive types are passed by value and non primitive types are passed by reference.

**06. Feature of use strict mode?**

- Prevent using non declare variable
- Prevent using reserved keyword, will be used in future version of JS
- Prevent object-properties deletion

**07. exec() vs test() in JS?**

Both search for pattern in string. If found `exec()` return the string, on the other hand `test()` return boolean.

**08. scope and scope chain in JS?**

JS has 3 sscopes

- Global namespace scope
- Function scope
- Block scope

Scope chain,

When a variable is not found in block scope, it goes upper scope and continue untill found the variable.

**09. What are constructor function?**

Allow creating object from a function. Consider two object,

```js
const person1 = {
  name: 'name1'
}

const person2 = {
  name: 'name2'
}
```

We can simplify using function constructor,

```js
function Person (name) {
  this.name = name;
}

const person1 = new Person('name1');
const person2 = new Person('name2');
```

**10. What is DOM?**

`DOM` is document object model. When browser render the html, it first create a object tree and we call it dom.
