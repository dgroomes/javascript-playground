# animals-library

A JavaScript library that lists animal names.


## Overview

This is an npm-based JavaScript library that lists animal names and the type of environment (e.g. "forest", "rainforest")
the animals are found in. This library is written using ECMAScript modules. Read about [Node.js support for ECMAScript modules in the Node.js docs](https://nodejs.org/api/esm.html).

Usually, npm-based libraries are published to the npm registry available on the public internet. However, for this
example project we don't need to reach so far, and instead we can publish (in a sense) the `animals-library` distribution
to our local file system using npm's `pack` command.


## Instructions

Follow these instructions to build the `animals-library` distribution:

1. Pre-requisite: npm
   * I used npm version 8.19.2
2. Package the library distribution:
   * ```shell
     npm pack
     ```
   * Notice that the file `animals-library-0.1.0.tgz` was created in the current working directory.


## Reference

* [Blog Post: *Testing npm packages before publishing*](https://medium.com/@vcarl/problems-with-npm-link-and-an-alternative-4dbdd3e66811)
  *  This blog post makes a good case for the `npm pack` command in favor of `npm link`.
* [Node.js docs: *Modules: Packages*](https://nodejs.org/api/packages.html#modules-packages)
  * The Node.js docs are rich. They aren't just reference docs but they also have a "guide" feel. I probably would have
    saved myself a lot of grief just reading these docs instead of jumping straight into things like TypeScript, library
    development, and especially Webpack.
