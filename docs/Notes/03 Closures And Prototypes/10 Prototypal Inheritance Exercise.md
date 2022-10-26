## Prototypal Inheritance Exercise

### Add a new functionality in `Date` object

---

Let's add a new function named `lastYear` of the `Date` object, that will return the 1 year earlier than current year.

```js
Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};
new Date('1900-10-10').lastYear();
```

Here we use `function` keyword instead of `arrow` method to use `dynamic-scope` instead of `lexical-scope`.

When using `function` keyword, the `this` context is the `new Date`.

But with `arrow method` the `this` context is the `arrow method` itself, given below,

```js
Date.prototype.lastYear = () => {
  return this.getFullYear() - 1;
};

new Date('1900-10-10').lastYear();
```

It will throw error of,

```
TypeError: this.getFullYear is not a function
```

### Manipulate the `map` functionality of Array

---

We will add a text `manupulated` before each values of array,

```js
Array.prototype.map = function (args) {
  const newArray = [];
  this.forEach(val => newArray.push(`manipulated ${val}`));
  return newArray;
};

console.log([1, 2, 3].map());
```

This will give us output

```bash
[ 'manipulated 1', 'manipulated 2', 'manipulated 3' ]
```

### Creating own `bind` method using the `apply` or `call`

---

```js
Function.prototype.bind = function (whoIsCallingMe) {
  const self = this;
  return function () {
    return self.apply(whoIsCallingMe, arguments);
  };
};
```
