# npm-library

An example NPM-based library and an example NPM-based program that consumes it.

## Description

This example project is laid out across two directories:

* `animals-library/`
  * This directory defines a traditional "library". It is meant to be published to a software registry (NPM) and consumed
    by other libraries or by a runnable program. The library just lists some animal names. 
* `forest-program/`
  * This directory defines a runnable program. It depends on `animals-library` via the NPM `dependencies` block. It
    tells a short story about animals living in a forest.

Both `animals-library` and `forest-program` are standalone NPM projects. That is, they:

* Define a `package.json`
* They have their own README and instructions
* They can be developed independently of each other

In fact, pretend that these projects exist in separate Git repositories and that they are maintained by different people.
Most "software library to consuming software program" relationships are like that.

This project is important to me because it's a runnable reference example of a software library and depending software
program in the NPM ecosystem. All software toolchains have bespoke implementations and peculiar limitations. Think about
Gradle, NPM, Rust/Cargo, Go/GoModules, Python/pip/pipenv/venv, etc. It's impossible to memorize the trivia required to
build and run software using these toolchains. It's necessary to have understandable reference examples.

I'd like to create more examples for increasingly sophisticated library-to-consumer relationships like:

* [x] DONE A JavaScript library bundled with Rollup
  * This was implemented in `../npm-library-rollup/` 
* [ ] A JavaScript library bundled with Rollup and with multiple entry points (e.g. web extensions use multiple entrypoints)
* [ ] A JavaScript library that also contains TypeScript type definitions
* [x] DONE A TypeScript library compiled with `tsc`
  * This was implemented in `../npm-library-typescript/`
* ... other TypeScript build toolchains
* [ ] A monolith-style repository with local libraries defined as NPM workspaces and a workspace that acts as the runnable
  consumer program
