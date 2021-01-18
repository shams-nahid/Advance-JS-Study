## Javascript Runtime

Javascript is a single threaded language hence has one call stack and one memory heap.

So as single thread architecture, one program should wait to complete the previous program.

For a long running process, the program will be too much slow.

That should not be an ideal case. This is where the Javascript runtime comes in.

In browser, the web api works as a javascript runtime. This web api is available in all the major browsers, like chrome, edge, opera, firefox etc.

This handle the long running process and let the call stack know it is done with some process and data is ready.

This web api handle the fetch api, dom events, long running process like set-timeout or set-interval method. Even this web api can be used as caching or runtime database.

So when a long running async process came up in the call stack, it pass that task to the web-api.

Web-api handle the task in background and put the completed task to the call-back-queue.

The event loop always check if the call stack is empty or not. If it is empty then it put the completed task from the call-back-queue to call-stack.
