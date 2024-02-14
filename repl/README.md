# repl

This is a working example of the Node.js REPL (Read-Eval-Print-Loop) and how to make the most of it.


## Overview

REPLs are **fast and iterative**. Languages with runtimes usually have a REPL: Python, Ruby, Node.js, Java and more. In
these languages, you can start a REPL on the commandline, write some "hello world"-style code, and see the result
immediately. You can build up a program incrementally and see the results of each step. This is a great way to quickly
learn and experiment.

REPLs can source **existing code**. While REPLs are usually introduced as a way to write a "hello world" program, they
can also be used to source existing code like your own program code or third-party libraries. You can use a REPL over a
large and sophisticated codebase. There's no reason to limit REPLs only to the classroom.

What does it look like to use the Node.js REPL and "pre-import" some of my own code? This project explores that idea.
I found that when using ESM modules, the best route is to create a custom launcher for a Node.js REPL that is customized
with some imports. I got on the right track thanks to this [GitHub Issues comment](https://github.com/nodejs/node/issues/44094#issuecomment-1296599749). 


## Instructions

Follow these instructions to use the Node.js REPL and preload some code.

1. Pre-requisite: Node.js
    * I used version 20.11.0
2. Launch the customized REPL
    * ```shell
      node launch-repl.mjs
      ```
    * It will look something like the following.
    * ```text
      $ node launch-repl.mjs
      (custom-repl)> Attaching "hashBase64" to the REPL context
      Attaching "hashHex" to the REPL context
      Attaching "multiHash" to the REPL context
      (custom-repl)> hash
      ```
    * Notice the "Attaching..." statements. All the functions that were attached to the REPL context are available
      globally. You can autocomplete them. Try typing "hash" and double-tapping the tab key (that's **two** tab presses).
3. Explore 
    * Altogether, this is what your REPL session might look like.
    * ```text
      (custom-repl)> hashBase64("javascript-playground/repl")
      'fBsdqvWUgUAvSNy0ek3ojboca2A1PDjWuLD8X5bIjG0='      
      (custom-repl)> hashHex("javascript-playground/repl")
      '7c1b1daaf59481402f48dcb47a4de88dba1c6b60353c38d6b8b0fc5f96c88c6d'
      (custom-repl)> multiHash("javascript-playground/repl")
      {
        hashHex: '7c1b1daaf59481402f48dcb47a4de88dba1c6b60353c38d6b8b0fc5f96c88c6d',
        hashBase64: 'fBsdqvWUgUAvSNy0ek3ojboca2A1PDjWuLD8X5bIjG0='
      }
      ```
    * When you're done, use the `.exit` command to exit the REPL.


## Wish List

General clean-ups, TODOs and things I wish to implement for this project:

* [x] DONE (no need for dynamic imports; I don't care to consider CommonJS) Flesh out the history and technical limitation so Node.js REPLs with regard to ESM vs CommonJS. We are using a
  custom REPL here instead of the "preload" technique because of the ESM limitation.
* [ ] SKIP (Interesting, but I'll consider it out of scope. I intended this as a showcase of Node.js) What does it look like to use a REPL over TypeScript code?


## Reference

* [Node.js REPL](https://nodejs.org/api/repl.html)
