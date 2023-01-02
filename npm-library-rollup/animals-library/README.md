# animals-library

A JavaScript library that lists animal names. The library is bundled with Rollup.


## Instructions

Follow these instructions to build the `animals-library` distribution.

1. Pre-requisite: npm
   * I used npm version 8.19.2
2. Pre-requisite: Node.js
   * I used version 18.12.1
3. Install the dependencies:
    * ```shell
      npm install
      ```
4. Bundle the code:
   * ```shell
     npm run build
     ```
   * Notice that the file `dist/animals.mjs` was created in the current working directory.
5. Package the library distribution:
   * ```shell
     npm pack
     ```
   * Notice that the file `animals-library-0.1.0.tgz` was created in the current working directory.


## Reference

* [Rollup](https://rollupjs.org/guide/en/)
* [GitHub repo: `rollup/rollup`](https://github.com/rollup/rollup)
  * > Next-generation ES module bundler
* [*Webpack and Rollup: the same but different*](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c)
