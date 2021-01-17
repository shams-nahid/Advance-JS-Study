## Type Coercion

- When we use `==` to compare, if the value matches, then JS simply try to map multiple types to a single type.

**Example**

```js
console.log(1 == '1');
```

This is true.

- This mapping type is `Type Coercion`.
- When we use `===`, it does not use the `Type Coercion`.

```js
console.log(1 === '1');
```

This is false.

### Example of JS Coercion

**Example 1:**

```js
console.log(1 == '1');
```

Here the `coercion` converts the type to `string` or `number`, so the results is true.

**Example 2:**

```js
if (1) {
  console.log('1 is True);
}
```

Here the `coercion` converts the type of `1` to true.

**Example 2:**

```js
if (0) {
  console.log('0 is False);
}
```

Here the `coercion` converts the type of `0` to false.

### Exercise

try to guess the outputs.

```js
false == '';
false == [];
false == {};
'' == 0;
'' == [];
'' == {};
0 == [];
0 == {};
0 == null;
```
