## Prototypal Inheritance 03

### Prototype chain does not copy the properties, it just use the properties and methods.

---

**Example**

```js
const dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    return `I am ${this.name}, the breather of fire`;
  }
};

const lizard = {
  name: 'Kiki',
  fight() {
    return 1;
  }
};

lizard.__proto__ = dragon;

for (let prop in lizard) {
  console.log(
    `Is ${prop} lizards own property: ${lizard.hasOwnProperty(prop)}`
  );
}
```

This will give us output

```bash
Is name lizards own property: true
Is fight lizards own property: true
Is fire lizards own property: false
Is sing lizards own property: false
```

So we can see, only `name` and `fight` are the `lizard` own property. Both `fire` and `sing` properties are come from the `prototype-chain`.

Since it is not copy the properties, this is helpful. For example if we use `sing` method of `dragon` object in multiple places, we can use the one single instance. We are not repeating ourselves and saving memory.

### Prototype chain for a function

---

Let's create a `function`

```js
function myMethod() {}
```

We know `function` are special type of `object` in `Javascript`.

So the following statement should return `true`.

```js
myMethod.hasOwnProperty('call');
```

But this will return `false`.

Because, these `call`, `bind`, `apply` methods are appeared in a method through the `prototype-chain`.

The `__proto__` of the `myMethod` linked to the native base function `prototype` object.

That base function `prototype` object contains all the following,

- `call`
- `apply`
- `bind`
- `__proto__`, this point to the base object of Javascript
- Many more ...

```js
myMethod.___proto__.hasOwnProperty('call');
```

This will return true.

And this `__proto__` of the base function `prototype` chain to the base object `prototype` property.

Base object `__proto__` of the `prototype` property point to the `null`.

### Prototypes Chian for Array

---

let's define an array.

```js
const myArr = [];
```

We know the javascript array has property called `map`. Let's check

```js
myArr.hasOwnProperty('map');
```

This will return `false`. Because the `map` come through the `prototype-chain`. When we create an array, it is created by the `Array` object. Using `prototype` chain we can access the `Array` and check the `map` property existence.

```js
myArr.__proto__.hasOwnProperty('map');
```

This should return `true`.
