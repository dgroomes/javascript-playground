# animals-library

A TypeScript library that lists animal names. The library is defined across multiple npm workspaces.


## Description

I'm not really sure this is a good idea. TypeScript (and modularized JavaScript using ES modules) has a literal 'module'
system. So why take it a step further and modularize the code into separate npm workspace? Well, I don't know if this is
a good idea, but I do this in Gradle projects all the time and it's great. The npm (and related) tooling does not work
so great for this though. I'm missing: task dependencies (a.k.a Gradle directed-acyclic-graph), a notion of cleaning up
stale resources (Gradle's build cache works so well these days), and transitive artifact dependencies across workspaces in
an uber artifact (e.g. a "fat jar") (again not sure this is a good idea).


## Instructions

Follow these instructions to build the program distribution:

1. Pre-work
    * You need to build `animal-lister` first. Follow the instructions in the README of that project. Note: there has to
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
    * Notice that the file `animals-library-0.1.0.tgz` was created in the current working directory.

