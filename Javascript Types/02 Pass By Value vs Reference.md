## Pass By Value vs Reference

- In Javascript primitive types are immutable and `pass by value`

  - Primitive types contains single value
  - To change a primitive type, we need to remove it from memory and allocated it to another place
  - For example, to change `var a = 5;` to `a = 10`, we literally move it from memory and create another one.

  **Example**:

  ```js
  var a = 5;
  var b = a;

  b++;

  console.log(a);
  console.log(b);
  ```

  Here we will get the output

  ```js
  5;
  6;
  ```

  When we assign `a` to `b`, the `b` create the copy of the value `a`, which is `5` to it's own memory.

  Thats why, increasing the `b` does not impact to the `a`.

- On the other hand, `objects` are `Pass by Reference`

  **Example**:

  ```js
  const obj1 = {
    name: 'John',
    password: 'myPass'
  };

  const obj2 = obj1;

  obj2.password = 'changed';

  console.log(obj1.password);
  ```

  This will print `changed`.

  Since `array` are object and use reference, this is also applicable to to array.

  ```js
  const a = [1, 2, 3];
  const b = a;

  b.push(4);

  console.log(a);
  ```

  This will print `1, 2, 3, 4`.

### Avoiding Pass By Reference

- To avoid `array` pass by reference, we can use

  - `concat`
  - `spread operator`

  **Example**:

  ```js
  const arr = [1, 2, 3];
  const extend = [...arr];
  const extend2 = [].concat(arr);
  extend.push(4);
  extend2.push(4);

  console.log(arr);
  ```

  This `arr` is still `[1, 2, 3]`.

- To avoid `object` pass by reference, we can use,

  - Use `spread` or `assign` to avoid `shallow copy (aka one layer)`
  - Use `JSON.parse` and `JSON.stringify` to avoid `deep copy`

  **Example**:

  ```js
  const obj = {
    a: 1,
    b: 2,
    c: {
      d: 3
    }
  };

  const clone1 = Object.assign({}, obj);
  const clone2 = { ...obj };
  const deepClone = JSON.parse(JSON.stringify(obj));

  obj.b = 500;
  obj.c.d = 100;

  console.log(clone1);
  console.log(clone2);
  console.log(deepClone);
  ```

  In this case, `clone1` and `clone2` both being override in the `d` property.

  But, in the `deepClone` object, all the nested object is in separate memory, so not changed.

  In deep clone using `parse` and `stringify`, there will be performance impact.
