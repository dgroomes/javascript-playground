# npm-library-typescript-multi-workspace-rollup-api-extractor

An example npm-based multi-workspace TypeScript library bundled with Rollup. It uses TypeScript project references. The types are also bundled with API Extractor into a standalone `index.d.ts`.

---
**Monorepo Warning**

I wouldn't recommend the project design pattern implemented here. 

This project design is pushing the npm and TypeScript toolchains beyond what they are comfortable doing. The end result
is tenuous, hard to wrap your head around and likely to break at times as parts of the toolchain evolve past each other.
For example, I imagine npm or TypeScript making a small breaking change at some point. Or at least, the change will cause
errors in the IDE or editor.

Implementing this project was a good exercise, however. My final conclusion is:

> Consider not mixing the multi-module capabilities of different toolchains.
> 
> TypeScript's version of multi-module projects is *Project References*. npm's version of multi-module projects is
> *npm workspaces*. When designing your own project, choose one, or the other, but not both. Look for different toolchains
> altogether. Monorepo tooling is a big topic right now. Research some alternatives. Don't be afraid to just "say no"
> until an ergonomic and maintainable option is invented.

---


## Description

I want a working example of a multi-workspace TypeScript project. I'm following the great example of this [2ality blog post: *Simple monorepos via npm workspaces and TypeScript project references*](https://2ality.com/2021/07/simple-monorepos.html).


## Wish List

General clean ups, TODOs and things I wish to implement for this project:

* [x] DONE It should really be published as `animals-library` and not `animal-lister`. This is consistent with the other
  example projects.
* [x] DONE (Done, but I'm not sure I recommend the pattern I implemented) Can I get a one-shot "build everything" command? I know I could write a Bash script to do that. But that's not
  idiomatic. This capability should be powered by the toolchain (npm, TypeScript/tsc). 
  * This should be possible with [TypeScript project references](https://2ality.com/2021/07/simple-monorepos.html#typescript-project-references)
* [ ] Is it really necessary to have the `src/` directory showing up in `dist/`? I couldn't get it to work any other way.
  this is similar to how it was implemented in the 2ality blog post. But it's awkward because "source" by definition is
  not the distribution artifact if the source code compiled into something else.

## References

* [TypeScript docs: *Project References*](https://www.typescriptlang.org/docs/handbook/project-references.html)
