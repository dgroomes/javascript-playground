# npm-library-typescript-multi-workspace-rollup-api-extractor

An example npm-based multi-workspace TypeScript library bundled with Rollup. It uses TypeScript project references. The types are also bundled with API Extractor into a standalone `index.d.ts`.

---
**Consider your options**

I don't recommend the project design pattern implemented here. See the related note in `animals-library/README.md`:

> **Monorepo Warning**: this project design is pushing npm and the TypeScript toolchain beyond what they are comfortable doing.
> It was good for me to learn this. My final conclusion is: "Do not mix the multi-module capabilities of different toolchains".
> TypeScript's version of multi-module projects is 'Project References'. npm's version of multi-module projects is
> 'npm workspaces'. When designing your own project, choose one, or the other, or look for different toolchains altogether.
> Monorepo tooling is a big topic right now. Research some alternatives. Don't be afraid to just "say no" until an
> ergonomic and maintainable option is invented.

---


## Description

I want a working example of a multi-workspace TypeScript project. I'm following the great example of this [2ality blog post: *Simple monorepos via npm workspaces and TypeScript project references*](https://2ality.com/2021/07/simple-monorepos.html).


## Wish List

General clean ups, TODOs and things I wish to implement for this project:

* [x] DONE It should really be published as `animals-library` and not `animal-lister`. This is consistent with the other
  example projects.
* [x] DONE (Done, but I don't recommend using the pattern I implemented) Can I get a one-shot "build everything" command? I know I could write a Bash script to do that. But that's not
  idiomatic. This capability should be powered by the toolchain (npm, TypeScript/tsc). 
  * This should be possible with [TypeScript project references](https://2ality.com/2021/07/simple-monorepos.html#typescript-project-references)


## References

* [TypeScript docs: *Project References*](https://www.typescriptlang.org/docs/handbook/project-references.html)
