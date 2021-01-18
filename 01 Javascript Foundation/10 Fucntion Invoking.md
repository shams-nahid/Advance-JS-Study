## Function Invoking

We can define function in two ways,

- Function Expression

```js
var myMethod = function () {
  console.log('This is function expression');
};
```

Can be written in arrow syntax,

```js
var myMethod = () => console.log('This is function expression');
```

- Function Declaration

```js
function() {
  console.log('This is function declaration');
}
```

When we use the function declaration, it is hoisted. But the function expression does not get hoisted.

### arguments

Javascript has a arguments in the function's execution context.
