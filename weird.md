- `null` is a object type

```js
typeOf null
```

returns `object`

- How `typeOf []` and `typeOf function() {}` is both belongs to object, even though the `typeOf function() {}` returns `function`

```js
function a() {
  return 5;
}

a.test = 'test value';

console.log(a.test);
```

Just like object, we can add an property to the function and call it.
