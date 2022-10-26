## Prototypal Inheritance 01

- Javascript uses prototypal inheritance (Java, Python like language use classical inheritance).
- Inheritance means, an object getting access of another object methods and properties.
- It helps
  - Avoid repeating functionalities
  - Making innovative programming paradigms
- In Javascript, `class` keyword is a `syntactic sugar`. Internally it uses the `prototypal inheritance`.
- Both `array` and `function` are objects in Javascript.
- So any `object`, `array` and `function` can use the property of the parent prototyped chain `object` properties and methods.

**Example 01: Array Prototype Chain**

```js
const array = [];
```

Here we created an array. This array object is created by the constructor of a object. We can access theses constructor anr other array methods like `concat`, `fill`, `find`, `push`, `pop` etc using the following,

```js
array.__proto__;
```

Using `prototype chain` we can access the base object, using the following,

```js
array.__proto__.__proto__;
```

From this base object, we can access the `base object` properties and methods like, `constructor`, `hasOwnProperty`, `toString`, `valueOf` etc.

Now we can use the base object method using the prototype chain. For example to use the `toString` method from base object, we can write

```js
array.toString();
```

Since our array is empty, it will return empty string.

**Example 02: Function Prototype Chain**

Let's create a method

```js
function a() {}
```

Using prototype chain, we can observe the `native function`. The `native function` is the one, created all other `functions`.

```js
a.__proto__;
```

Using the `prototype chain`, if we go one step closer, we will find the `base object`.

```js
a.__proto__.__proto__;
```

**Example 02: Object Prototype Chain**

Now let's declare a object

```js
const obj = {};
```

If we check the prototype chain, we will found the `base object`.

```js
console.log(obj.__proto__);
```
