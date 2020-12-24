## JS Engine

### What do we know/heard about JS Engine?

- Most cases, it uses `V8 Engine` internally
- It is single threaded and use call-back
- It is an interpreted language

Let's talk about what this engine, we are mentioning.

If I give a plain JS file to a Computer, It can not read or interpret the language.
The CPU only understands the 0's and 1's.

To fill this communication gap, we need a translator or interpreter. This is the position the V8 Engine come to play.

This magical engine read our code and interpret it to the CPU.

### ECMA-Script Engine

- First JS Engine
- Firefox still using spider monkey

Before 2008, most browser use very basic engines. When V8 came up, it was a significant pivotal time of JS.

V8 was released by Google. While they were developing the Map application, it requires a powerful engine compare to traditional available JS engine.

### Inside V8 Engine

- Most popular
- Most usages
- Blazing Fast
- Used by
  - Chrome
  - Node.js
- Written in C++
- It took the code and do the followings `Lexical Analysis`
  - Parser (Do the tokenizations)
  - AST (aka, `Abstract Syntax Tree` From token, it forms the tree)
  - Interpreter (Translate the code to `ByCode`)
  - Profiler (Watcher for the `Interpreter` and looking for `Optimization`)
  - Compiler (If `Profiler` point out for some `Optimization Required` in the `Interpreter` it )
  - Optimization

### Interpreter

- Translate and read the code line by line
- Interpreting code means
  - Take a set of instructions
  - Return answer by doing according to the instructions
- In this case translation is happening on the fly

### Compiler

- It does not translate on the fly
- It works ahead of time
  - Went through the whole code base
  - Convert in a such way, the machine can understand the code
- Example
  - Babel (Take modern JS and make them compatible to Old browser)
  - Typescript (Superset of JS, compile down to JS)

### Interpreter Vs Compiler

- Interpreter
  - Quick to get up and running
  - Slower for repeated code
- Compiler
  - Took little more time to start up compare to the Interpreter
  - Can use some optimization mechanism for repeated codebase

### JIT Compiler

Stands for `Just In Time` compiler.

Both the interpreter and compiler has its pro and cons.

Some engineers from google came up with the goodies of them and created the `JIT Compiler`

### V8 and JIT Compiler

In `V8`, the code is translated to `Byte Code` by `Interpreter`.
The `V8` is intelligent enough to determine if there is an optimization is required.
In this case the `V8` engine brings the `JIT Compiler`.

### Is Javascript interpreted language?

It depends on the implementation.

Initially `JS` was the interpreted language. Now with `V8` it's the `Compiled` language.

Same goes for the `Python`. It could be both, interpreted or compiled.
