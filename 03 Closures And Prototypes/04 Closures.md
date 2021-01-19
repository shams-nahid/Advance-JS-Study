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
function myMethod() {
  const myVar = 'Hello from closures';
  setTimeout(function () {
    console.log(myVar);
  }, 4000);
}

myMethod();
```

This will print

```bash
Hello from closures
```

Here we pass the `setTimeout` part to the `web-api` and start a timer of `4 seconds`. When `4 seconds` time is over code is return to the `call-back queue`, and wait for the `empty call-stack`.

When it goes to the call stack, the `myMethod` should be removed from the stack. But the `myVar` will be kept in the `closure`, as it is referenced in the `setTimeout` method.

**Example 03: Ignore Hoisting**

```js
function myMethod() {
  setTimeout(function () {
    console.log(myVar);
  }, 4000);
  const myVar = 'Hello from closures';
}

myMethod();
```

This will also print

```bash
Hello from closures
```

Since `const` does not hoist, the `myVar` should be a `reference error`. But closure ignore the hoisting and print the `Hello from closures`.

### Advantages

**Example: Memory Efficiency**

Lets consider a method, that creates a large array. It returns the array elements by the index we pass.

```js
function heavyDuty(index) {
  const bigArray = new Array(10000).fill('element');
  return bigArray[index];
}

heavyDuty(10);
heavyDuty(5000);
```

Here every time we invoke the method `heavyDuty` method, a new array is being created with `10000` items and return the element of the desired index.

In this case repeatedly after each call we have to generate an array of `10000` elements.

We can cache the array by the following way using closures.

```js
function heavyDuty(index) {
  const bigArray = new Array(10000).fill('element');
  return function (index) {
    return bigArray[index];
  };
}

const getElement = heavyDuty();
getElement(10);
getElement(5000);
```

In this way, we do not pollute the global scope. We create the array once and invoke the element by index multiple time.

**Example: Memory Encapsulation**

Let's consider a method.

```js
const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const peaceTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return 'Booooom!!!!';
  };
  setInterval(peaceTime, 1000);
  return {
    launch,
    totalPeaceTime
  };
};

const noooo = makeNuclearButton();
noooo.totalPeaceTime();
```

Here when we make the object of `makeNuclearButton`, until we invoke `launch` method, the `peaceTime` is increasing.

The moment we invoke the `launch` method, using `noooo.launch()` the `peaceTime` become `0`.

Now our concern is not had over the `launch` method to everyone.

This is a philosophy of `encapsulation` or `least privilege`.
