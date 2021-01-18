## Execution Context

We run code by

- Defining objects
- Invoking methods

Every time we invoke a method, the Javascript engine creates a new execution context.

### Global Execution Context

Even though we do not define any objects or methods, the Javascript created a `Global Execution Context`.

This global execution context provides a global object named `window`. In node.js world this global object is called `global`.

Global execution also provide the `this` context. Both, the `this` context and `window` object are the same object.

Also there are `Hosting` in the global execution section, used to run before the code execution.

Whenever we define a global object, it is attached to the `window` object by the `global context`.
