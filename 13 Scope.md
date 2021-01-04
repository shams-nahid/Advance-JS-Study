## Scope

### Example 1

Block scope does not work with Javascript when using the `var` keyword.

```js
if (true) {
  var myVal = 'Hello World!!';
}

console.log(myVal);
```

This will print the `myVal`, even though the `myVal` is inside the block scope.

### Example 2

Functional scope works with the `var` keyword.

```js
function myMethod() {
  var myVal = 'Hello World!!';
}

console.log(myVal);
```

Now the `myVal` is inside the functional scope. This is not accessible from the global lexical environment.

### Example 3

To use this block scope, instead of using `var` keyword, we can use `const` or `let` keyword.

```js
if (true) {
  const myVal = 'Hello World!!';
}

console.log(myVal);
```

```js
if (true) {
  const myVal = 'Hello World!!';
}

console.log(myVal);
```

In the both example the JS engine will through the `Reference Error`.
