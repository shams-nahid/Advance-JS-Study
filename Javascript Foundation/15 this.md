## this

- `this` is the object, the function is property of

```js
obj.someFunc(this);
```

Here `obj` is the `this`.

Another example,

```js
const myObject = {
  name: 'foo',
  task: function () {
    return `This is ${this.name} task.`;
  }
};

myObject.task();
```

This will return the text `This is foo task.`.

By definition, here `this` refers to the object `myObject`. The function of `task` is the property of `myObject`.

- In global scope, `this` is the `window` object

In global scope, if we define a function

```js
function a() {
  console.log(this);
}
```

It will print the `window` object.

Since, the `a()` method is `window.a()`, so according to our first definition, for `a()`, `this` is the `window` object.

### Benefits

- Allow methods and properties of object itself

Example

```js
const myObject = {
  name: 'foo',
  task: function () {
    return `Do ${this.name} task.`;
  },
  doTask: function () {
    return `Do ${this.task()}`;
  }
};

myObject.doTask();
```

This will return `Do foo task.`

- Execute same code for multiple objects

Example

```js
function showMyName() {
  console.log(this.name);
}

const foo = {
  name: 'foo',
  showMyName
};

const bar = {
  name: 'foo',
  showMyName
};

foo();
bar();
```

This will return

```bash
foo
bar
```
