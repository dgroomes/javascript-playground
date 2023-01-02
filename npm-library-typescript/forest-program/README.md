# forest-program

A TypeScript program that tells a short story about animals in a forest.


## Overview

Follow these instructions to build and run the program.

1. Pre-requisite: npm
   * I used npm version 8.19.2
2. Pre-requisite: Node.js
   * I used version 18.12.1
3. Install the dependencies:
   * ```shell
     npm install
     ```
4. If needed, re-install `animals-library`
   * ```shell
     npm install ../animals-library/animals-library-0.1.0.tgz
     ```
5. Transpile the TypeScript:
   * ```shell
     npm run build
     ```
6. Run the program:
   * ```shell
     node forest-story.js
     ```
   * The output will look like this:
     ```text
     This is a story about animals in the forest...
     A bear was found in the forest.
     A owl was found in the forest.
     A toucan was found in the forest. That's odd. This animal is usually found in a rainforest.
     
     The end.
     ```
