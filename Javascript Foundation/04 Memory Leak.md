## Memory Leak

To avoid memory leak, we can consider the followings

- Use less number of global variables
- While adding a listener, ensuring removing the listener
- Carefully using the `setInterval` method. The code snippet, call stack and memory heap of the `setInterval` is not cleared by the `Garbage Collection`
