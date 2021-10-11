## Factory Function

Consider avengers with their name and power.

When we allocate `Thor` in a object,

```js
const avenger1 = {
  name: 'Thor',
  weapon: 'Hammer',
  attack() {
    console.log(`${this.name} attack with ${this.weapon}`);
  }
};

avenger1.attack(); // Thor attack with Hammer
```

And when we allocate `Doctor Strange`,

```js
const avenger2 = {
  name: 'Doctor Strange',
  weapon: 'Magic',
  attack() {
    console.log(`${this.name} attack with ${this.weapon}`);
  }
};

avenger2.attack(); // Doctor Strange attack with Magic
```

In this case we can make use of **Factory Function** and reduce declaring both object.

Our factory function will be

```js
const avenger = (name, weapon) => {
  return {
    name,
    weapon,
    attack() {
      console.log(`${this.name} attack with ${this.weapon}`);
    }
  };
};

const thor = avenger('Thor', 'Hammer');
thor.attack(); // Thor attack with Hammer

const doctorStranger = avenger('Doctor Stranger', 'Magic');
doctorStranger.attack(); // Doctor Strange attack with Magic
```

With factory function, we can simplify the logic and reuse the logic. The only trade-offs we can find is, repeat the `attack` method.

When we have many avengers, they will have the separate name and weapon. It is okay to persist them in memory. Since, the attack method is always same, keeping it with every avengers is a waste of memory.

Since the `Thor` or `Doctor Stranger` are invoking the same `attack` method, we need to make use of prototype to reduce the method define with each object.
