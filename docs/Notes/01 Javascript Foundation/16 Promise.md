# Promise

---

- `Promise` is a object, that will eventually produce a single value, could be resolved or reject.
- `Promise` has 3 states,
  - Fulfilled / resolved
  - Rejected
  - Pending
- Promise is Javascript native property and has own queue called `Job Queue` or `Micro Task Queue`
- This `Job Queue` or `Micro Task Queue` is not part of `Call Back Queue` in `Event Loop`
- `Job Queue` or `Micro Task Queue` has higher priority than `Call Back Queue` aka `Event Loop` checks `Job Queue` before `Callback Queue`
- Promise can run 3 ways,
  - **Parallel**: All promises will run parallel
  - **Sequential**: Promises will run one after another
  - **Race**: Promise will be resolved, when any of the promise in list is being resolved.

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

## Promise.all (Resolve only when all is resolved)

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

## Promise.allSettled (Resolved with all resolved and rejected result)

Returns the result of all promises even if some fails.

```js
const promise1 = new Promise(resolve =>
  setTimeout(resolve('This is resolve'), 3000)
);

const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject('Something went wrong!'), 3000)
);

Promise.allSettled([promise1, promise2]).then(data => console.log(data));
```

In this case, we will get output of all promises, resolved and rejected,

```
[
    {
        "status": "fulfilled",
        "value": "This is resolve"
    },
    {
        "status": "rejected",
        "reason": "Something went wrong!"
    }
]
```

## Promise.any (The moment any of the promise is resolved, return)

It resolves if any of the promise is being resolved first. If none of promise able to resolved, only then the

## Parallel Promise Example

In parallel promise, we will get the resolved result when all the promises are being resolved.

```js
const promisify = (item, delay) =>
  new Promise(resolve => setTimeout(() => resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `parallel is done: ${output1} ${output2} ${output3}`;
}

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `parallel is done: ${output1} ${output2} ${output3}`;
}

parallel().then(console.log);
```

After 5 seconds, we will get the output of `parallel is done: a b c`.

## Promise.race (Resolved when any promise resolved, if one rejected before any other resolved, result is reject)

In race promise, we will get only one resolved result from the first resolved promise.

```js
const promisify = (item, delay) =>
  new Promise(resolve => setTimeout(() => resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function race() {
  const promises = [a(), b(), c()];
  const output = await Promise.race(promises);
  return `race is done: ${output}`;
}

race().then(console.log);
```

Since promise `a` will be resolved earlier, after 100 milliseconds, we will get the output of `race is done: a`.

## Sequence Promise Example

In sequence promise, all the promises will be executed one after another. We will get the resolved result when all the promise is being resolved.

```js
const promisify = (item, delay) =>
  new Promise(resolve => setTimeout(() => resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done: ${output1} ${output2} ${output3}`;
}

sequence().then(console.log);
```

Here all the promises will be resolved one after another and we will get a output of `sequence is done: a b c` after 8.01 seconds later.
