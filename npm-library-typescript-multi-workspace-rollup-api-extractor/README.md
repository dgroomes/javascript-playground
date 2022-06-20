# npm-library-typescript-multi-workspace-rollup-api-extractor

An example npm-based multi-workspace TypeScript library bundled with Rollup. The types are also bundled with API Extractor into a standalone `index.d.ts`.


## Description

I want a working example of a multi-workspace TypeScript project. I'm following the great example of this [2ality blog post: *Simple monorepos via npm workspaces and TypeScript project references*](https://2ality.com/2021/07/simple-monorepos.html). 


## Wish List

General clean ups, TODOs and things I wish to implement for this project:

* [x] DONE It should really be published as `animals-library` and not `animal-lister`. This is consistent with the other
  example projects.
* [ ] Can I get a one-shot "build everything" command? I know I could write a Bash script to do that. But that's not
  idiomatic. This capability should be powered by the toolchain (npm, TypeScript/tsc). 
