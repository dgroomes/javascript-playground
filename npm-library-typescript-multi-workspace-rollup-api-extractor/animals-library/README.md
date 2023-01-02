# animals-library

A TypeScript library that lists animal names. The library is defined across multiple npm workspaces and TypeScript project references.


## Description

This project is defined across two npm workspaces: `animal-lister/` and `animal-names/`. In the abstract sense of the
concept of *software modules*, you can consider `animal-lister/` to be a module and `animal-names/` to be another module.
After all, they each live in their own directories, they each have their own project manifest file (i.e. `package.json`),
and they each represent a cohesive unit of functionality: `animal-names/` defines a list of animal names, and
`animal-lister/` defines an iterative procedure to list animal names. Together, these two modules make up the
`animals-library`. While this is only a toy example, this style of organization is useful for large projects. For example,
I use this style of organization all the time in Gradle-based Java projects. 

By contrast, [the TypeScript programming language defines a module concept](https://www.typescriptlang.org/docs/handbook/modules.html)
and [the JavaScript programming language defines a module concept](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).
These are not abstract definitions.

On top of this, the TypeScript programming language and toolchain also defines another modularization concept called [*project references*](https://www.typescriptlang.org/docs/handbook/project-references.html).
This project uses project references out of my personal belief/guess that this is (or will become) an idiomatic way to
organize a TypeScript project.

How do we reconcile software modularization using "npm workspaces" with software modularization using TypeScript/JavaScript
modules and with TypeScript project references? Should we use only one of these techniques? Should we use a combination
of them? What are the pros/cons? This project helped me to explore the interoperability of these options.

In the end, I'm not really sure the design I came up with is practical. The npm (and related) tooling doesn't work as
well as Gradle does when it comes to modularized codebases. I'm missing the following:

* Task dependencies
  * For example, Gradle tasks are related to each other in a directed acyclic graph (DAG). Because we are using a mash
    up of tools (npm vs tsc vs rollup vs api-extractor), there winds up being no "orchestrator" tool that.
* A notion of cleaning up stale resources
  * For example, Gradle's build cache works so well these days. Gradle's compiler avoidance is awesome. Similarly, we
    have the same "no orchestrator" problem.
* The "final destination" artifacts
  * I need to reach to yet another tool, in this case the [API Extractor](https://api-extractor.com/) tool, to build
    the final TypeScript types file (`index.d.ts`).


## Instructions

Follow these instructions to build the library distribution.

1. Pre-requisite: npm
    * I used npm version 8.19.2
2. Pre-requisite: Node.js
    * I used version 18.12.1
3. Install the dependencies:
    * ```shell
      npm install
      ```
4. Transpile the TypeScript source code across all workspaces:
    * ```shell
      npm run transpile
      ```
5. Bundle the JavaScript code:
    * ```shell
      npm run bundle-js
      ```
    * Notice that the file `dist/index.mjs` was created. This is the final bundled JavaScript that will be consumed
      by programs depending on `animals-library`. But, for consuming programs written in TypeScript, we need to also
      offer type definitions that describe the bundled JavaScript. See the next step.
6. Bundle the TypeScript declarations:
    * ```shell
      npm run bundle-types
      ```
    * Notice that the file `dist/index.d.ts` was created.
7. Package the library distribution:
    * ```shell
      npm pack
      ```
    * Notice that the file `animals-library-0.1.0.tgz` was created in the current working directory.

