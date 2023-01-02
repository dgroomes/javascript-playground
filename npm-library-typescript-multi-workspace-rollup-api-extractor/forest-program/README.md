# forest-program

A TypeScript program that tells a short story about animals in a forest.


## Instructions

Follow these instructions to build and run the program.

1. Pre-requisite: npm
   * I used npm version 8.19.2
2. Pre-requisite: Node.js
   * I used version 18.12.1
3. Pre-work
    * You need to build `animals-library` first. Follow the instructions in the README of that project.
4. Install the dependencies:
    * ```shell
      npm install
      ```
5. If needed, re-install `animals-library`
    * ```shell
      npm install ../animals-library/dgroomes-animals-library-0.1.0.tgz
      ```
6. Transpile the TypeScript source code:
    * ```shell
      npm run transpile
      ```
7. Use Node version v16.15.0 or later
8. Run the program:
    * ```shell
      node dist/forest-story.js
      ```
    * The output will look like this:
      ```text
      This is a story about animals in the forest...
      A bear was found in the forest.
      A owl was found in the forest.
      A toucan was found in the forest. That's odd. This animal is usually found in a rainforest.
      
      The end.
      ```
