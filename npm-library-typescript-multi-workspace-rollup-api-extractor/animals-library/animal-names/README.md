# animal-names

A static list of animal names.


## Overview

Let's call the directory `animal-names/` a *subproject* of the overall `animals-library` project. The `animal-names`
subproject defines an npm workspace that is part of the parent project and it defines [TypeScript project references via the `tsconfig.ref.json` file](https://www.typescriptlang.org/docs/handbook/project-references.html)
that also characterize this subproject as "a piece of a larger whole".

Conveniently, you don't have to build this subproject directly and instead you can rely on the top-level build steps
defined in the parent project. See the [parent project's README](../README.md) for more information.
