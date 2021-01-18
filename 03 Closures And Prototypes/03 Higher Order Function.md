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

letPersonAuthenticate({ name: 'Tim', level: 'user' });
letPersonAuthenticate({ name: 'Sally', level: 'admin' });
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
