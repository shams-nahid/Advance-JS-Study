## Closures

- Closures is the combination of `function` and `lexical scope`
  - `Function`
    - Since they are first class citizen in JS,
      - We can pass function as data
      - We can also return function as data
  - `Lexical Scope`
    - Means JS engine knows where the code is written before we even run the code, what variable each function has accessed to.
- Closure allows a method to access variables of methods, even though the method left the stack

**Example 01: Storing Local Properties**

```js
function a() {
  const grandpa = 'Grandpa';
  return function b() {
    const father = 'Father';
    return function c() {
      const son = 'Son';
      return `${grandpa} > ${father} > ${son}`;
    };
  };
}

const one = a();
// 10 years later...
one()();
```

This will return

```bash
Grandpa > Father > Son
```

Here after we invoke the `a()` the `a()` method should be popped out from the `scope`. Also its property `grandpa` should be popped out from the stack.

Since the reference of the `grandpa` is used in the `c()`, the `closure` will store these.

So when garbage collector came to removed the this `grandpa` will not be removed from the memory.

**Example 02: Storing Local Properties**

```js
function a() {
  const grandpa = 'Grandpa';
  const someRandomVariable = 'random value';
  return function b() {
    const father = 'Father';
    return function c() {
      const son = 'Son';
      return `${grandpa} > ${father} > ${son}`;
    };
  };
}

const one = a();
one()();
```

This will return

```bash
Grandpa > Father > Son
```

Since the variable `someRandomVariable` is not referenced to any of the method, it will be removed by the `garbage collector`.

**Example 03: Storing Reference Parameters**

```js
const hoc = num1 => num2 => num1 * num2;

const multiplyByTen = hoc(10);

multiplyByTen(5);
```

Here's another example of `closure` is the first parameter `10` is being preserved from the `garbage collector`. So we can use even though the first arrow method `hoc()` is being removed from the `lexical scope`

**Example 03: With Event Loop**

```js

```

**Example 03: Ignore Hoisting**

```js

```
