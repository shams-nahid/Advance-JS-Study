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

- When considering method, `this` means, who called the method

Example

```js
const a = function () {
  console.log('For a, this is ', this);
  const b = function () {
    console.log('For b, this is ', this);
    const c = {
      hi: function () {
        console.log('For c, this is ', this);
      }
    };
    c.hi();
  };
};

a();
```

In this case, both `a` and `b` has the `window` object as `this`.

And for `c`, since it is invoked by `c`, then, the `this` is the `c` object.

Now, query might be, how `b()` has the `this` object `window`, not the `a`. Because `b()` is not invoked by in similar way `a.b()`. Instead, it is invoked like `window.a(b())`

- `this` is not lexically scoped, it depends on how it is called (dynamically scoped).

Example

```js
const obj = {
  name: 'Billy',
  sing() {
    console.log('a', this);
    var anotherMethod = function () {
      console.log('b', this);
    };
    anotherMethod();
  }
};

obj.sing();
```

Here for `a`, the `this` context is `obj`.

For `b`, the `this` context should be `obj`. But since, `this` is not lexically scoped and follow method calls, `b` has the `this` context of `window`.

This is why `this` follows the `dynamic scoped` instead of `lexical scoped`.

To solve this `dynamic scope` issue, we can use `arrow method`. `Arrow method` is bound to the `lexical scoped`.

Example

```js
const obj = {
  name: 'Billy',
  sing() {
    console.log('a', this);
    var anotherMethod = () => {
      console.log('b', this);
    };
    anotherMethod();
  }
};

obj.sing();
```

Here both `a` and `b` has the `this` context of `obj`.

Another was to make the `this` to `lexical scoped` is using `bind()` method.

Example

```js
const obj = {
  name: 'Billy',
  sing() {
    console.log('a', this);
    var anotherMethod = function () {
      console.log('b', this);
    };
    return anotherMethod.bind(this);
  }
};

obj.sing()();
```

Here also `a` and `b` has the `this` context of `obj`. This was the go to method before we using the `arrow method`.

Another way to use the `this` context of the `lexical scope` is store the `this` context of the `lexical scope`.

```js
const obj = {
  name: 'Billy',
  sing() {
    console.log('a', this);
    var self = this;
    var anotherMethod = function () {
      console.log('b', self);
    };
    anotherMethod();
  }
};

obj.sing();
```

Here both `a` and `b` have the `this` context of `obj`.

### Manipulating the `this` context

We can manipulate the `this` keyword using the following methods

- call()
  - Every time we invoke a method, `call()` method is being invoked internally.
    ```js
    var myMethod = function () {};
    // following both statements are similar
    myMethod();
    myMethod.call();
    ```
- apply()
  ```js
  var myMethod = function () {};
  // following both statements are similar
  myMethod();
  myMethod.apply();
  ```
- bind()

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
