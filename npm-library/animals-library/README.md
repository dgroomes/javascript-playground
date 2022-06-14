# animals-library

NOT YET IMPLEMENTED

A JavaScript library that lists animal names.

## Instructions

Follow these instructions to build the `animals-library` distribution:

1. Use NPM version 8.5.5 or later
2. Build the library distribution:
   * ```shell
     npm pack
     ```
   * Notice that the file name `animals-library-0.1.0.tgz` was created in the current working directory.

Usually, NPM-based libraries are published to the NPM registry available on the public internet. However, for this
example project we don't need to reach so far and instead we can publish (in a sense) the `animals-library` distribution
to our local file system using the `npm pack` command.

## Reference

*  [Blog Post: *Testing npm packages before publishing*](https://medium.com/@vcarl/problems-with-npm-link-and-an-alternative-4dbdd3e66811)
    *  This blog post makes a good case for the `npm pack` command in favor of `npm link`.
