# forest-program

A JavaScript program that tells a short story about animals in a forest.


## Overview

This program depends on the `animals-library`. For each animal listed in `animals-library`, the program describes that
the animal was found in the forest.

The dependency relationship from this program to the `animals-library` module was created with the command:

```shell
npm install ../animals-library/animals-library-0.1.0.tgz
```

Whenever the code in `animals-library` is changed, the `animals-libary` distribution must be built again and the above
command must be rerun for the code changes to be reflected in `forest-program`.

This program is written using ECMAScript modules. Read about [Node.js support for ECMAScript modules in the Node.js docs](https://nodejs.org/api/esm.html).


## Instructions

Follow these instructions to build and run the program.

1. Pre-requisite: npm
   * I used npm version 8.19.2
2. Pre-requisite: Node.js
   * I used version 18.12.1
3. Install the dependencies:
   * ```shell
     npm install
     ```
4. Run the program:
   * ```shell
     node forest-story.mjs
     ```
   * The output will look like this:
     ```text
     This is a story about animals in the forest...
     A bear was found in the forest.
     A owl was found in the forest.
     A toucan was found in the forest. That's odd. This animal is usually found in a rainforest.
     
     The end.
     ```
