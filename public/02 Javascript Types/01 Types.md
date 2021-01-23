## Types

- Has 7 different types in Javascript
  - number
  - boolean
  - string
  - undefined
  - null (primitive)
  - Symbol()
  - object
- `undefined` vs `null`
  - `undefined` is the absence of definition
    - In object hoisting we use `undefined`
  - `null` is absence of value
- Types are categorized in 2 sections
  - Primitive (Represents single value)
    - number
    - boolean
    - string
    - undefined
    - null (primitive)
    - Symbol()
  - Non-Primitive
    - object
    - array
    - function
- `Array` type

  - `typoOf []` returns `object`
  - In JS the array is interpreted as below

  ```js
  var myArr = ['a', 'b', 'c'];
  ```

  This is same as below syntax.

  ```js
  var myArr = {
    0: 'a',
    1: 'b',
    2: 'c'
  };
  ```

  - Since both `object` and `array` is type of `object`, we can determine an array by using the `Array` object and its `isArray()` method.

  ```js
  console.log(Array.isArray([1, 2, 3]));
  console.log(Array.isArray({}));
  ```

  Here the first one will print `true` and the second one `false`.
