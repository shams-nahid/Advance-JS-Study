## IIFE

- Stands for `Immediately Invoke Function Invocation`
- Can be use to minimize global variable declaration
- IIFE has the following syntax

```js
(function () {})();
```

- IIFE is a function expression, not a function declaration
- We can not call a function declaration

```js
function() {}()
```

This will throw syntax error.

But using IIFE we can call a function declaration immediately.

```js
(function () {})();
```

### Benefits of IIFE

- No global property is created, all the properties is inside the function declaration scope.

```js
(function () {
  var a = 10;
})();

a;
```

Here `a` is defined inside the function expression, not available in the global scope.

- It creates it's own execution context, variable environment
