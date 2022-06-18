# animals-library

A TypeScript library that lists animal names. The library is bundled with Rollup. The types are bundled with API Extractor into a standalone `index.d.ts`.

## Instructions

Follow these instructions to build the `animals-library` distribution:

1. Use NPM version 8.5.5 or later
2. Install the dependencies:
   * ```shell
     npm install
     ```
3. Transpile the TypeScript:
   * ```shell
     npm run transpile
     ```
   * Notice the directory `transpiled/` was created. It contains the JavaScript files that were transpiled from the
     TypeScript source code and it also contains TypeScript declaration files (`.d.ts`). The `transpiled/` directory
     represents an intermediate state of the build process. We still need to bundle the JavaScript code and bundle the
     TypeScript declaration files.
4. Bundle the JavaScript code: 
   * ```shell
     npm run bundle-js
     ```
   * Notice that the file `dist/index.mjs` was created. This is the final bundled JavaScript that will be consumed
     by programs depending on `animals-library`. But, for consuming programs written in TypeScript, we need to also offer
     type definitions that describe the bundled JavaScript. See the next step.
* Bundle the TypeScript declaration file
  * ```shell
    npm run bundle-types
    ```
  * Notice that the file `dist/index.d.ts` was created.
6. Package the library distribution:
   * ```shell
     npm pack
     ```
   * Notice that the file `animals-library-0.1.0.tgz` was created.

## Reference

* [API Extractor](https://api-extractor.com/)
  * The "API Extractor" tool seems to be a good answer to the question "How do you publish a TypeScript-based library?".
    This is a project by Microsoft. It is part of a Microsoft monorepo called [`microsoft/rushstack`](https://github.com/microsoft/rushstack).
    Of all organizations, Microsoft is a strong candidate to implement this kind of tool because of course, Microsoft is
    the maintainer of TypeScript itself.
