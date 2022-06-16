# animals-library

A JavaScript library that lists animal names. The library is bundled with Webpack.

## Instructions

Follow these instructions to build the `animals-library` distribution:

1. Use NPM version 8.5.5 or later
2. Bundle the code:
   * ```shell
     npm run build
     ```
   * Notice that the file `dist/animals.js` was created in the current working directory.
4. Build the library distribution:
   * ```shell
     npm pack
     ```
   * Notice that the file `animals-library-0.1.0.tgz` was created in the current working directory.

## Reference

*  [Blog Post: *Testing npm packages before publishing*](https://medium.com/@vcarl/problems-with-npm-link-and-an-alternative-4dbdd3e66811)
    *  This blog post makes a good case for the `npm pack` command in favor of `npm link`.
