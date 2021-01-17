## Functions Are Objects

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
    const thirdWay() {
      return 3;
    }

    thirdWay();
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
