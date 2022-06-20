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

1. Use npm version 8.5.5 or later
2. Install the dependencies:
    * ```shell
      npm install
      ```
3. Transpile the TypeScript source code across all workspaces:
    * ```shell
      npm run transpile
      ```
    * This will error with `animal-lister/src/index.ts:1:23 - error TS2307: Cannot find module '@dgroomes/animal-names' or its corresponding type declarations.`
    * This is an order-of-operations problem. The `animal-lister` package depends on the program distribution from the
      `animal-names` package but it hasn't been built yet. If you execute the transpilation one work time, it will work.
      Execute the following command for the second time now:
    * ```shell
      npm run transpile
      ```
    * **Monorepo Warning**: this project design is pushing npm and the TypeScript toolchain beyond what they are comfortable doing. It
      was good for me to learn this. My final conclusion is: "Do not mix the multi-module capabilities of different toolchains".
      TypeScript's version of multi-module projects is 'Project References'. npm's version of multi-module projects is
      'npm workspaces'. When designing your own project, choose one, or the other, or look for different toolchains altogether.
      Monorepo tooling is a big topic right now. Research some alternatives. Don't be afraid to just "say no" until an
      ergonomic and maintainable option is invented.
4. Bundle the JavaScript code:
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

