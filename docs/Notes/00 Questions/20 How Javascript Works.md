A program does,

- Allocate memory to store variables
- Parse and execute scripts (Read and run code)

Each browser has a javascript engine, and in chrome, we call it `V8`. This `V8` engine reads the Javascript codes and make it machine executable execution for browser.

This `V8` engine is consist of two parts,

- Memory Heap
- Call Stack

The `Call Stack` read and execute the code.

**Memory Heap**

`Memory Heap` does the variable allocation. We can allocate memory by simply,

```js
const a = 10;
const b = 20;
```

Here in the `Memory Heap` we have allocated `a` and `b`. One concern, these are global variable and we need to clean these from memory. Because memory is limited. If we keep storing lots memory, the heap can be exceed and program will crash. It's a good practice to avoid global variables.

**Call Stack**

When we run a program, each program statement is stored in the call stack. When the statement is executed, te statement is removed from the stack.

Since Javascript is single threaded, there is only one call stack.

```js
console.log(1);
console.log(2);
console.log(3);
```

Here. `console.log(1);` first loaded into the stack, then executed and removed from the stack. Then similar things happen to the `console.log(2);` and `console.log(3);`.

Let's consider another example,

```js
function one() {
  function two() {
    console.log(2);
  }
  two();
}

one();
```

Here the call stack loaded as follows, first load `one()`, `two()` and finally `console.log(2)`,

```
console.log(2)
two()
one()
```

Then the stack got empty as follows, `console.log(2)`, `two()`, `one()`, in the reverse order.
