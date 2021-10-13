## Weird Syntax

### Example 1

Let's observe an example

```js
function myMethod() {
  myVal = 50;
  return myVal;
}

console.log(myMethod());
```

Here the `myValue` belongs to the global execution context. Without defining, this is an un-predicted behaviour.

To restrict this type of un-predicted behavior, we can use `use strict` on the top.

### Example 2

Now, let's see another syntax.

```js
var myMethod = function myMethodName() {
  return 'Hello World!!';
};
```

Here the `myMethod` belongs to the global lexical environment. But the `myMethodName` belongs to the functional lexical environment.
