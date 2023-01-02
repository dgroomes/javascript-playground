# animal-lister

Enumerate a list of animals.


## Overview

Let's call the directory `animal-lister/` a *subproject* of the overall `animals-library` project. The `animal-lister`
subproject defines an npm workspace that is part of the parent project and it defines [TypeScript project references via the `tsconfig.ref.json` file](https://www.typescriptlang.org/docs/handbook/project-references.html)
that also characterize this subproject as "a piece of a larger whole".

Conveniently, you don't have to build this subproject directly and instead you can rely on the top-level build steps
defined in the parent project. See the [parent project's README](../README.md) for more information.

(UPDATE: I can't figure out how to get this to work at the current commit. Maybe I had it working but maybe I never committed a working setup...) Importantly though, you can build this project directly if you are developing changes to it and want to exercise the
code-build-test lifecycle without engaging the overall `animals-library` code-build-test lifecycle. I won't describe the
exact steps, but it boils down to an eventual `npm run transpile` command. One quirk though is that you need to manually
build the `animal-names` subproject as a pre-requisite to building this subproject because the toolchain combination of
npm workspaces + TypeScript project references does not have the smarts to do that automatically.
