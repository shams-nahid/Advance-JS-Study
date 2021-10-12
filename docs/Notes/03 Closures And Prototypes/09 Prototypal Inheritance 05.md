## Prototypal Inheritance 05

### Only function has `prototype` object

---

Let's create an object and a function and check if there is `prototype` object.

```js
const obj = {};
function myFunc() {}

console.log(obj.hasOwnProperty('prototype'));
console.log(myFunc.hasOwnProperty('prototype'));
```

This will return

```bash
false
true
```

Now we know the base object of Javascript `Object` has a property `property`.

```js
Object.hasOwnProperty('prototype');
```

This will return `true`.

Actually the `Object` of the javascript is a function not an object.
