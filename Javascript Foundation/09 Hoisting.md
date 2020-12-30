## Hoisting

- This hoisting feature is resided in the `Global Execution Context`
- Before run the code, this feature hoist the `var` and `function`
- For `var` keyword, it allocate a memory in the memory heap with value `undefined` (Partial Hoisting)
- For `function`, it hoisted the whole functional definition
- This hoisting feature is applicable for only
  - `var` keyword
  - Function Declaration
  - Functional Expression with `var` keyword
- Does not applicable for `let` or `const` keyword

---

**Example 01:**

```js
console.log(myVar);

var myVar = 'Hello World!';
```

Here the hosting feature assume there will be a variable named `myVar` and assigned initial value `undefined`.

So this Will return `undefined`.

---

**Example 02:**

```js
console.log(myMethod());

function myMethod() {
  return 'Hello World!!!';
}
```

Since hoisting feature hoist the function with its definition, this will return `Hello World!!!`.

---

**Example 03:**

```js
console.log(myMethod());

(function myMethod() {
  return 'Hello World!!!';
});
```

In this case, the hoisting does not find any function keyword, instead it get the `(`.

So this Will throw `Reference Error`.

---

**Example 04:**

```js
console.log(myMethod);

(function myMethod() {
  return 'Hello World!!!';
});
```

Like previous explanation, the hoisting does not get any function, instead it saws the `(`.

So this will throw `Reference Error`.

---

**Example 05:**

```js
console.log(myValue);

const myValue = 'Hello World';
```

Since `ES6` feature, `let` and `const` does not support the hoisting, this will throw `Reference Error`.

---

**Example 06:**

```js
console.log(myValue);

let myValue = 'Hello World';
```

Like previous example, since `ES6` feature, `let` and `const` does not support the hoisting, this will throw `Reference Error`.

---

**Example 07:**

```js
console.log(myMethod());

var myMethod = function () {
  return 'Hello World!!!';
};
```

Here the hoisting feature hoist the `myMethod` with value `undefined`. In `console.log` it is interpreted something like `undefined()`. So this will throw `Reference Error`.

---

**Example 08:**

```js
console.log(myMethod);

var myMethod = function () {
  return 'Hello World!!!';
};
```

In this case, the hoist feature hoist the `myMethod` and in memory heap, assigned the initial value `undefined`. So this Will return `undefined`.

---

**Example 09:**

```js
console.log(myValue);

var myValue = 1;
var myValue = 2;
```

_Hoisting do partial hoisting for the `var` keyword._

In this case, when the hoisting first get the `newValue` declaration it put the initial value, `undefined`. When it again encounter the `myValue` it just ignore the definition.

And it will return `undefined`.

---

**Example 10:**

```js
console.log(myMethod());

function myMethod() {
  return 'Initial Encounter';
}

function myMethod() {
  return 'Final Encounter';
}
```

In this case, when the first time `myMethod` will be encountered, it will hoist the definition which is returning `Initial Encounter`.

When the hoisting feature again encounter `myMethod`, it will again hoist the new definition that is returning `Final Encounter`.

So this will return `Final Encounter`.

---

**Example 11:**

```js
var myValue = 'Hello World!!';

var myMethod = function () {
  console.log(`My Value: ${myValue}`);

  var myValue = 'Updated Value';

  console.log(`My Value: ${myValue}`);
};

myMethod();
```

According to the object hoisting, it happens every time a new execution context is being created.

Also, every time we invoke a method, a new execution context is being created.

For the global execution context, the hoisting set `myValue` and `myMethod` as `undefined`.

Now for the `myMethod` a new execution context and a new hoisting is created. Here using the hoisting `myValue` is hoisted as `undefined`.

This will return the following 2 lines

```bash
My Value: undefined
My Value: Updated Value
```

---

**Example 12:**

```js
var myValue = 'Hello World!!';

var myMethod = function () {
  console.log(`My Value: ${myValue}`);

  var myNewValue = 'Updated Value';

  console.log(`My Value: ${myNewValue}`);
};

myMethod();
```

Comparing from the previous example, whenever there is not conflicting of method scoped variable and global hoisted variable, we should get the output as expected.

This will return the following 2 lines

```bash
My Value: Hello World!!
My Value: Updated Value
```

### Avoiding Object Hoisting

From the example 11 and 12, we see that the out put is not predicted due to the hoisting.

To make the codebase predicted we can use `const` and `let` instead of `var`.
