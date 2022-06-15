# npm-library-typescript

An example NPM-based library written in TypeScript and an example NPM-based program written in TypeScript that consumes it.

## Description

This example project is a translation of the `../npm-libary/` project but instead of JavaScript, TypeScript is used.
I won't repeat the same README content that was already written in `../npm-library`. Please study the README in that project
to better understand this one.

Adding TypeScript to a project can have a pronounced effect on the toolchain used to build it. This project uses the
TypeScript compiler, called `tsc`, directly. In more sophisticated projects, its necessary to reach for a bundler like
Webpack, Vite, Rollup, or esbuild.
