# async

Showcasing the asynchronous programming features of JavaScript.


## Overview

JavaScript has a rich set of options when it comes to asynchronous programming. This project is a collection of examples
that show how to use these features.

There are four sample programs that print messages interspersed with asynchronous "sleep" operations. Each program has
the exact same output but is implemented in a unique style. Read the code and the comments carefully and then follow the
instructions below to run the programs. 


## Instructions

Follow these instructions to run the example programs.

1. Pre-requisite: Node.js
    * I used version 18.12.1
2. Run the traditional callback-based program:
    * ```shell
      node timeout-with-callbacks.js
      ```
3. Next, run the promise-based program:
    * ```shell
      node timeout-with-promises.js
      ```
4. Next, run the generator-based program:
    * ```shell
      node timeout-with-generators.js
      ```
5. Finally, run the async/await-based program:
    * ```shell
      node timeout-with-async-await.js
      ```
6. Experiment!
    * Change the code, re-run the programs, and think critically so you can learn these JavaScript features "in your
      bones".


## Reference

* [MDN Reference Docs: _*function_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
  > The `function*` declaration (`function` keyword followed by an asterisk) defines a _generator function_, which
    returns a `Generator` object.
  > Generators in JavaScript — especially when combined with Promises — are a very powerful tool for asynchronous
    programming as they mitigate — if not entirely eliminate -- the problems with callbacks, such as Callback Hell and
    Inversion of Control. However, an even simpler solution to these problems can be achieved with async functions.
  * Is this MDN doc saying that generator functions are obsoleted by `async` functions? Very interesting.
* [MDN Reference Docs: *async function*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
  > The `async function` declaration declares an async function where the `await` keyword is permitted within the
    function body. The `async` and `await` keywords enable asynchronous, promise-based behavior to be written in a
    cleaner style, avoiding the need to explicitly configure promise chains.
