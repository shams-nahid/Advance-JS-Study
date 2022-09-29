## Functions Are Objects

**Query**

- How come, we can add property to a method?

  ```js
  function myMethod() {
    return 1;
  }

  myMethod.foo = bar;

  console.log(method());
  console.log(method.foo);
  ```

- How come we can get the name of the `method` by `method.name`?

  ```js
  function myMethod() {
    return 1;
  }

  console.log(myMethod.name);
  ```

- How come we can pass a method with all it's property and data?
- In method, how come we get the properties like `call`, `apply`, `bind` etc.

**Discussion**

- We can invoke a method using the following four methods

  - Using old school syntax
    ```js
    function FirstWay() {
      return 1;
    }
    firstWay();
    ```
  - Using an `ES6`, in this case, the `this` context is the `object` context

    ```js
    const obj = {
      function secondWay() {
        return 2;
      }
    }

    obj.secondWay();
    ```

  - Using `call` method

    ```js
    const thirdWay = () => {
      return 3;
    }

    thirdWay.call();
    ```

  - Using `Function` constructor

    ```js
    const fourthWay = new Function('return 4');

    fourthWay();
    ```

    We can also use parameter in the `Function` constructor.

    ```js
    const fourthWay = new Function('num', 'return num');

    fourthWay(4);
    ```

- We can assign an object like property in the `function`, example

  ```js
  function test() {
    return 1;
  }

  test.foo = 'bar';

  console.log(test());
  console.log(test.foo);
  console.log(test.name);
  ```

  Here we will get output

  ```bash
  1
  bar
  test
  ```

  Here we can add a property in the function, just like an object.

  Internally, when we define a object in `Javascript`, it interpret the `Test function`, we defined earlier, something like the following object

  ```js
  const specialFunctionMethod = {
    name: 'test',
    foo: 'bar',
    (): 'return 1'
  }
  ```

Whenever we create a method, internally a object is being created with the following properties

- code (We can invoke using `()`)
- name (optional, because the `arrow method` does not have a `name`)
- properties
  - `call`
  - `apply`
  - `bind`

### Final Thought

- Functions are just objects in Javascript
- We can pass them around like objects, like containing data
- Besides just doing things and perform actions, Javascript function are stored as data
