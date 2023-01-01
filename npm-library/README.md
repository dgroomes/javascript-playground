# npm-library

An example npm-based library and an example npm-based program that consumes it.


## Overview

This example project is laid out across two directories:

* `animals-library/`
  * This directory defines a traditional *library*. It is meant to be published to a software registry (npm) and
    consumed by other libraries or by a runnable program. The library just lists some animal names. 
* `forest-program/`
  * This directory defines a runnable program. It depends on `animals-library` via the npm `dependencies` block. It
    tells a short story about animals living in a forest.

Both `animals-library` and `forest-program` are standalone npm projects. That is, they:

* Define a `package.json`
* They have their own README and instructions
* They can be developed independently of each other

In fact, pretend that these projects exist in separate Git repositories and that they are maintained by different people.
Most "software library to consuming software program" relationships are like that. Read each of the subprojects in
depth.


## Software Toolchains 

This project is important to me because it's a runnable reference example of a software library and depending software
program in the npm ecosystem. All software toolchains have bespoke implementations and peculiar limitations. Think about
Gradle, npm, Rust/Cargo, Go/GoModules, Python/pip/pipenv/venv, etc. It's impossible to memorize the trivia required to
build and run software using these toolchains. It's necessary to have understandable reference examples.

Look at the sibling projects like `npm-library-rollup/` and `npm-library-typescript/` for more working examples of other
combinations of software toolchains like [Rollup](https://rollupjs.org/guide/en/) and the TypeScript compiler: `tsc`. 


## Wish List

General clean ups, TODOs and things I wish to implement for this project:

* [x] DONE How do you make it so that I can do `import {animals} from 'animals-library'` instead of `import {animals} from 'animals-library/dist/animals.mjs'`?
  * See [*Subpath exports*](https://nodejs.org/api/packages.html#subpath-exports)
