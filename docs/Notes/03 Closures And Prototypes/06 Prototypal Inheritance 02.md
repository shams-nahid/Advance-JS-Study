## Prototypal Inheritance 02

Lets create two character,

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
```

Now we want to use the `sing()` method of for `lizard`. But `lizard` does not have the `sing()` method. In this case we have to use the `dragon` object `sing()` method.

To use the `dragon` objects method, we can use the `bind` property.

```js
const singLizard = dragon.sing.bind(lizard);
singLizard();
```

This will give the output

```bash
I am Kiki, the breather of fire
```

Now if we update the `dragon` objects `sing()` method, that, to sing, the `fire` property is will be required, then the new `dragon` object will be,

```js
const dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`;
    }
  }
};
```

In this case, if we call `singLizard()` the sing method will not return the statement.

To return the statement, we have to bind the `fire` property for the `lizard` also from the `dragon` object.

To resolve this issue, instead of binding, we can use the `prototype chain`.

```js
lizard.__proto__ = dragon;
lizard.sing();
```

In this case, when the `sing()` method will not be found in the `lizard` object, it will check the prototype chain and execute the `sing()` method from there.

After using the `prototype chain`, if we invoke the `fight()` method for the `lizard` object,

```js
lizard.__proto__ = dragon;
lizard.fight();
```

This will return

```bash
1
```

Because, this `fight` method is already exist in the `lizard` object. So it will not go to the `prototype-chain` for `fight()` method of `dragon` object.

We can if the `dragon` is a prototype of `lizard` by the following,

```js
dragon.isPrototypeOf(lizard);
```

This will be `true`. And this `isPrototypeOf` came from the `base object`, also using the `prototype chain`.
