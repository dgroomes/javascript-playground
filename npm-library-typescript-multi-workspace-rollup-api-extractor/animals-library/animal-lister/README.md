# animal-lister

Enumerate a list of animals.


## Instructions

Follow these instructions to build the program disribution:

1. Pre-work 
    * You need to build `animal-names` first. Follow the instructions in the README of that project. Note: there has to
      be a way to express "please build the whole multi-workspace project" in one command. I'm hoping this is possible.
2. Use npm version 8.5.5 or later
3. Install the dependencies:
    * ```shell
      npm install
      ```
4. Transpile the TypeScript source code:
    * ```shell
      npm run transpile
      ```
5. Bundle the JavaScript code:
   * ```shell
     npm run bundle-js
     ```
   * Notice that the file `dist/index.mjs` was created. This is the final bundled JavaScript that will be consumed
     by programs depending on `animal-lister`. But, for consuming programs written in TypeScript, we need to also offer
     type definitions that describe the bundled JavaScript. See the next step.
* Bundle the TypeScript declarations:
   * ```shell
     npm run bundle-types
     ```
   * Notice that the file `dist/index.d.ts` was created.
3. Package the library distribution:
   * ```shell
     npm pack
     ```
   * Notice that the file `animal-lister-0.1.0.tgz` was created in the current working directory.

