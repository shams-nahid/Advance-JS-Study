## Scope Chain

When a function is being executed, in the execution context, there is a link of the parent environment. This link is called `scope chain`. So when a object/variable is not found in the functional scope, It goes to the parent environment using this `scope chain`.

### N.B.

- The global execution has the `Global Lexical Environment`

### [[scope]]

This keyword return the parents scope of the method.

```js
function myMethod() {}
```

In browser when we check `window.myMethod` properties, it will show its environment `Global`
