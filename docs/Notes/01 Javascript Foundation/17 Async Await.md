# Async Await

- Underneath the hood, the `async` function returns a promise.
- Biggest benefit of using `async-await` is it makes code easier to read.

Example of regular Promise,

```js
movePlayer('left to right')
  .then(() => movePlayer('bottom to top'))
  .then(() => movePlayer('right to left'))
  .then(() => movePlayer('bottom to top'));
```

Players operation,

```js
async function playerOperation() {
  await movePlayer('left to right');
  await movePlayer('bottom to top');
  await movePlayer('right to  left');
  await movePlayer('bottom to top');
}
```

`async-await` gives us control how the promise work internally and inside the `async` method, we can do the synchronous programming.
