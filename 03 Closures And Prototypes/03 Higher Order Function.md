## Higher Order Function

- Accepts function as parameter
- Allow codes make more generic
- Allow to pass methods not just data, but also method

**Example 01**

```js
function authenticate(data, authStrategy) {
  // do the auth mechanism
  return giveAccessTo(data.name);
}

function letPersonAuthenticate(data, fn) {
  if (data.level === 'admin') {
    fn(data, 'AdminStrategy');
  } else if (data.level === 'user') {
    fn(data, 'UserStrategy');
  }
}

letPersonAuthenticate({ name: 'Tim', level: 'user' }, authenticate);
letPersonAuthenticate({ name: 'Sally', level: 'admin' }, authenticate);
```

**Example 02**

```js
const multiplyBy = (value1, value2) => {
  return value1 * value2;
};

const multiplyByTwo = val => {
  return multiplyBy(val, 2);
};

const multiplyByFour = val => {
  return multiplyBy(val, 4);
};
```

**Example 03**

```js
const multiplyBy = function (value1) {
  return function (value2) {
    return value1 * value2;
  };
};

const multiplyByTwo = multiplyBy(2);
const multiplyByFour = multiplyBy(4);

multiplyByTwo(10);
multiplyByTwo(20);
```

**Example 04**

Simplify the previous example.

```js
const multiplyBy = val1 => val2 => val * val2;

const multiplyByTwo = multiplyBy(2);
const multiplyByFour = multiplyBy(4);

multiplyByTwo(10);
multiplyByTwo(20);
```
