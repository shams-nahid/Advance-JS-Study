# Promise

---

- `Promise` is a object, that will eventually produce a single value, could be resolved or reject.
- `Promise` has 3 states,
  - Fulfilled / resolved
  - Rejected
  - Pending

## Promise Structure

We can make a promise using the `Promise` keyword,

```js
const myPromise = new Promise((resolve, reject) => {
  if (EVERYTHING_WORKS_AS_EXPECTED) {
    resolve('Things Worked');
  } else {
    reject('Something Went Wrong!');
  }
});
```

We can use the promise as follows,

```js
myPromise
  .then(result => console.log(result))
  .catch(error => {
    // handle error
  });
```

### Chaining Promise Result

We can use chaining by using chaining in promise `then` ann update the keyword.

```js
const myPromise = new Promise((resolve, reject) => {
  resolve('Favorite bands: ');
});

myPromise
  .then(result => `${result} Warfaze`)
  .then(result => `${result}, Shironamhin`)
  .then(result => `${result}, Artcell`)
  .then(result => `${result}, Aurthohin`)
  .then(result => console.log(result));
```

We will get output of `Favorite bands: Warfaze, Shironamhin, Artcell, Aurthohin`.

Here we return `Favorite bands: ` in the first chain. Then updated the result in each of the chain using band names, `Warfaze`, `Shironamhin`, `Artcell`, `Authohin`.

### Throwing Error From Promise Result

In the promise chain, if there any error happens in the chain, it will directly jump to the `catch` statement.

```js
const myPromise = new Promise((resolve, reject) => {
  resolve('Favorite bands: ');
});

myPromise
  .then(result => {
    throw Error;
    return `${result} Warfaze`;
  })
  .then(result => `${result}, Shironamhin`)
  .then(result => `${result}, Artcell`)
  .then(result => `${result}, Aurthohin`)
  .then(result => console.log(result))
  .catch(error => console.log('Something went wrong!'));
```

We will get output of `Something went wrong!`.

In this case, in the first `then` when the error will be thrown, all rest of the then will be ignored and `catch` will catch the error statement.

### Any Catch Will be Ignored If No Error is Thrown

```js
const myPromise = new Promise((resolve, reject) => {
  resolve('Favorite bands: ');
});

myPromise
  .then(result => `${result} Warfaze`)
  .catch(error => console.log('Something went wrong!'))
  .then(result => `${result}, Shironamhin`)
  .then(result => console.log(result));
```

We will get output of `Favorite bands: Warfaze, Shironamhin`.

Since there is no error is being thrown in the chain, we do not encounter any catch statement and `Something went wrong!` will not be printed.

### Promise Chain After Error

In promise chain, if there is an error, the chain jump to the catch block. If after the catch block, there is still chains, it will go further.

```js
const myPromise = new Promise((resolve, reject) => {
  resolve('Favorite bands: ');
});

myPromise
  .then(result => {
    throw Error;
    return `${result} Warfaze`;
  })
  .then(result => `${result}, Shironamhin`)
  .then(result => `${result}, Artcell`)
  .catch(error => console.log('Something went wrong!'))
  .then(result => 'I love Aurthohin')
  .then(result => console.log(result));
```

We will get output of,

```

Something went wrong!
I love Aurthohin
```

Here, first we throw error and goes to the `catch` block. After the catch block, we continue to the `then` chaining.

### Finally

In promise chain, no matter what, `resolved` or `rejected`, the chain will goes to the finally block.

Example of `finally` with `resolved` promise.

```js
const myPromise = new Promise((resolve, reject) => {
  resolve('Favorite bands: ');
});

myPromise
  .then(result => `${result} Warfaze`)
  .then(result => console.log(result))
  .finally(() => console.log('Finally Statement'));
```

Here we will get the output of,

```
Favorite bands:  Warfaze
Finally Statement
```

Example of `finally` with `rejected` promise.

```js
const myPromise = new Promise((resolve, reject) => {
  resolve('Favorite bands: ');
});

myPromise
  .then(result => {
    throw Error;
    return `${result} Warfaze`;
  })
  .catch(error => console.log('Something went wrong!'))
  .finally(() => console.log('Finally Statement'));
```

Here we will get the output of,

```
Something went wrong!
Finally Statement
```

## Promise.all

When we need to resolve multiple `promise`, we can make use of `Promise.all`. This `Promise.all` will be resolved only when all the promise is being resolved,

```js
const promise1 = new Promise(resolve => {
  resolve('Promise 01');
});

const promise2 = new Promise(resolve => {
  setTimeout(resolve, 5000, 'Warfaze');
});

Promise.all([promise1, promise2]).then(results =>
  results.map(res => console.log(res))
);
```

After 5 seconds, we will get output,

```
Promise 01
Warfaze
```

Here although the first promise `promise1` resolved earlier, we will not get the results until all the promises are resolved. In this case we have to wait 5 seconds (Second promise time) to get all the results.

With `Promise.all`, the promise will be resolved only if all the promise is resolved. If one of the promise failed and resulted `rejected`, then all promise will be rejected.

```js
const promise1 = new Promise(resolve => {
  resolve('Promise 01');
});

const promise2 = new Promise((resolve, reject) => {
  reject('Something went wrong with promise2');
});

Promise.all([promise1, promise2])
  .then(results => console.log(results))
  .catch(error => console.log('Something Went Wrong'));
```

We will get output `Something Went Wrong`. Here the first promise resolved, but second promise is being `rejected`.

> In `Promise.all` all promise needs to be resolved, otherwise the chain will jump to the `catch` section.
