# file

Reading, decoding and writing files in Node.js.


## Overview

This project defines a sample program that uses the Node.js file APIs like `file`, `ReadStream` and `WriteStream` to read
files, decode the text content and write files. Follow the source code closely to learn these concepts in more depth.


## Instructions

Follow these instructions to run the example program.

1. Run the program
   * ```shell
     ./file.mjs
     ```
2. Inspect the output
   * The files `copy-of-README.md` and `copy-of-with-substitutions-README.md` should be created in the current directory.
     These files are ignored by Git.


## Wish List

General clean ups, TODOs and things I wish to implement for this project:

* [x] DONE Can a file be read chunk by chunk?
* [x] DONE Copy a file using a read and write stream and substitute placeholders with other values.
  This is a templating pattern.
* [x] DONE Be done with CommonJS. No more `require`. Please use ES6 modules and the `import` keyword. We're at the point where
  I don't need CommonJS example code.
