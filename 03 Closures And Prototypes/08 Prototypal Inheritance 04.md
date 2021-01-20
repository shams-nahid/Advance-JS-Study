## Creating Our Own Prototype

- We should never use the keyword `__proto__`, because that impact on execution performance.
- The keyword is named intentionally with four underscore, so no one accidentally use it.
- To use the `prototype-chin` we can use the `Object.create()` function.

```js
const human = {
  mortal: true
};
const socrates = Object.create(human);
socrates.age = 80;
console.log(`Age of socrates: ${socrates.age}`);
console.log(
  `Is human a prototype of socrates: ${human.isPrototypeOf(socrates)}`
);
```

This will give us the following output,

```bash
Age of socrates: 80
Is human a prototype of socrates: true
```
