# npm-library-webpack

**NOTICE**: This project needs to be re-tooled to something other than Webpack. Webpack does not support bundling to an
ES module. See [GitHub issue #2933: *support output.libraryTarget: 'module'*](https://github.com/webpack/webpack/issues/2933).
The code and project is left in a broken state.

An example NPM-based library bundled with Webpack and an example NPM-based program that consumes it.

## Description

This example project is a translation of the `../npm-libary/` project with the addition of *bundling*. The library code
is bundled into a single file: `animals.js`.

I won't repeat the same README content that was already written in `../npm-library`. Please study the README in that
project to better understand this one.

## Reference

* [Webpack docs: *Authoring Libraries* guide](https://webpack.js.org/guides/author-libraries/)
