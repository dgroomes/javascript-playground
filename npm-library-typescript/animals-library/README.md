 # animals-library

A TypeScript library that lists animal names.

## Instructions

Follow these instructions to build the `animals-library` distribution:

1. Use NPM version 8.5.5 or later
2. Install the dependencies
   * ```shell
     npm install
     ```
3. Transpile the TypeScript:
   * ```shell
     npm run build
     ```
4. Pack the library distribution
   * ```shell
     npm pack
     ```
   * Notice that the file `animals-library-0.1.0.tgz` was created in the current working directory.

## Reference

* [NPM "TypeScript" package](https://www.npmjs.com/package/typescript)
  * You can easily use the TypeScript compiler `tsc` by include TypeScript directly as a development dependency in your
    NPM project.
  * With the `tsc` CLI, I could quickly learn and discover things that I wouldn't be able to by using a tool that abstracts
    and wraps over `tsc`. For example, I did `npx tsc --init` and I got a nice annotated `tsconfig.json` file. 
* [GitHub repo `microsoft/TypeScript`. Issue #46452: *Concerns with TypeScript 4.5's Node 12+ ESM Support*](https://github.com/microsoft/TypeScript/issues/46452)
  * Track this issue and one you'll see that `tsc` supports outputting `.mjs` files. We want this.
