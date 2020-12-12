## JS Engine

### What do we know/heard about JS Engine?

- Most cases, it uses `V8 Engine` internally
- It is single threaded and use call-back
- It is an interpreted language

Let's talk about what this engine we are mentioning.

If I give a plain JS file to a Computer, It can not read or interpret the language.
The CPU only understands the 0's and 1's

To fill this communication gap, we need a translator or interpreter. This is the position the V8 Engine came to play.

This magical engine read our code and interpret it to the CPU.

### ECMA-Script Engine

- First JS Engine
- Firefox still using spider monkey

Before 2008, most browser use very basic engines. When V8 came up, it was a significant pivotal time of JS.

V8 was release by Google. While they were developing the Map application, it requires a powerful engine compare to traditional available JS engine.

### Inside V8 Engine

- Most popular
- Most usages
- Blazing Fast
- Used by
  - Chrome
  - Node.js
- Written in C++
