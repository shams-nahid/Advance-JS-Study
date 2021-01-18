## Function As First Class Citizen

- For the following 3 properties, functions are considered `First Class Citizen` in Javascript

  - We can assign function to variables

    ```js
    const myVar = function () {
      return 1;
    };

    console.log(myVar());
    ```

  - We can pass function as arguments

    ```js
    function one() {
      console.log(1);
    }

    function two(fn) {
      fn();
    }

    two(one);
    two(function () {
      console.log('2');
    });
    ```

  - We can also return function

    ```js
    function one() {
      return function two() {
        console.log(2);
      };
    }

    one()();
    ```
