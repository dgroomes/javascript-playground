# javascript-playground

📚 Learning and exploring JavaScript.


## Overview

This repository is my own exploration of JavaScript (JS) and the JavaScript ecosystem. It codifies some of the JS
concepts and trivia I've learned into runnable example programs, complete with verbose commentary and references.

**NOTE**: This project was developed on macOS. It is for my own personal use.


## Standalone sub-projects

This repository illustrates different concepts, patterns and examples via standalone sub-projects. Each sub-project is
completely independent of the others and do not depend on the root project. This _standalone sub-project constraint_
forces the sub-projects to be complete and maximizes the reader's chances of successfully running, understanding, and
re-using the code.

The sub-projects include:


## `console/`

Print dynamic content to the console with `readline` and DraftLog.

See the README in [console/](console/). 


## `object-oriented/`

Showcasing object-oriented language features of JavaScript.

See the README in [object-oriented/](object-oriented/). 


## `file/`

Reading, decoding and writing files in NodeJS.

See the README in [file/](file/).


## `misc/`

Miscellaneous JavaScript code. Learning by doing.

See the README in [misc/](misc/).


## `webpack/`

An intermediate Node/NPM project that uses webpack to build a TypeScript program.

See the README in [webpack/](webpack/).


## `npm-library/`

An example NPM-based library and an example NPM-based program that consumes it.

See the README in [npm-library/](npm-library/).


## `npm-library-typescript/`

An example NPM-based library written in TypeScript and an example NPM-based program written in TypeScript that consumes it.

See the README in [npm-library-typescript/](npm-library-typescript/).


## `npm-library-rollup/`

An example npm-based library bundled with Rollup and an example npm-based program that consumes it.

See the README in [npm-library-rollup/](npm-library-rollup/).


## `npm-library-typescript-rollup-api-extractor/`

An example TypeScript library bundled with Rollup. The types are also bundled with API Extractor into a standalone `index.d.ts`.

See the README in [npm-library-typescript-rollup-api-extractor/](npm-library-typescript-rollup-api-extractor/).


## `npm-library-typescript-multi-workspace-rollup-api-extractor/`

An example npm-based multi-workspace TypeScript library bundled with Rollup. It uses TypeScript project references. The types are also bundled with API Extractor into a standalone `index.d.ts`.

See the README in [npm-library-typescript-multi-workspace-rollup-api-extractor/](npm-library-typescript-multi-workspace-rollup-api-extractor/).


## Reference

* [MDN web docs: JavaScript classes reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [MDN web docs: `export` keyword](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)
* [MDN web docs: `import` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
* [MDN web docs: `JSON.stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
* [MDN web docs: Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
* [MDN web docs: Reflect](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
* [nodejs: ECMAScript modules](https://nodejs.org/api/esm.html#esm_enabling)
* [StackOverflow question and answer: a form of multi-module projects](https://stackoverflow.com/a/29787493)
* [Webpack GitHub issue #2933: *support output.libraryTarget: 'module'*](https://github.com/webpack/webpack/issues/2933)


## Wish List
   
General clean ups, TODOs and things I wish to implement for this project:

* [ ] Explore options to bundle the source code into a single HTML file. Why? I think the "single document" model (i.e. just
  a `index.html` and no other files) is killer. For a few reasons. For one, it's the only way to run JavaScript in the
  browser from a file (although I think browser vendors are experimenting with other sandboxed options I think...). Running
  code from a file is the most approachable way for a new developer. Makes the project approachable. The second reason
  is that I think a single document is easier to grok than a program with multiple sources (I didn't articulate this very
  well, but I mean it).
* [ ] Add a well-described async/await example that creates a Promise (and probably use the `setTimeout` function)
* [ ] Lowercase "npm". npm is stylized as "npm" not "NPM".
* [ ] In the many `npm-library*` subprojects, clean up a couple things. Push the `.gitignore` files into the individual
  projects. For example, push `animals-library-*.tgz` into `npm-library/animals-library`. Also, in the READMEs of the `forest-story`
  projects, use the `If needed, re-install `animals-library` style (a step) instead of explaining that step outside of
  the instruction steps.
* [ ] Replace the 'I won't repeat the contents of the other README' mentions. This brings too much drag to the cognitive
  load to the subprojects. Instead, repeat the contents. And better yet, cater the contents to the characteristics of the
  project. Also, to prevent a Twilight Zone effect of "Wait didn't I just see a 'animals-library', where am I now?" be sure
  to reference the other projects by name and as "Similar projects with different toolchains".
* [ ] Include source maps in the `npm-library*` projects.
* [ ] Create an example project of: a JavaScript library that also contains TypeScript type definitions
* [ ] IN PROGRESS 2023 upgrades.


### Finished Items

* [x] DONE Parse commandline arguments passed to Node
* [x] DONE Node has some fancy console logging features in its standard libraries, like the `console.table` function. Is there
  more? Is there a way to update the output printed to the console dynamically? Like a progress bar? Answer: well, I found
  a very popular library called "cli-progress" so I'll just use that. And under the hood, it uses a lower-level abstraction
  called `Terminal` to render the content to the terminal. So with some more studying, I could learn from the `Terminal`
  code to figure out how to draw arbitrary stuff to the console.
* [x] DONE Draw arbitrary stuff to the console, and *re-draw* new stuff that overwrites the old stuff, using "cli-progress"'s
  `Terminal` abstraction.  
* [x] DONE Replace "Terminal" usage with plain "readline"
* [x] DONE Do another "draw to the terminal" example similar to what "cli-progress" does and the "readline" example does but do it
  over multiple lines.
* [x] DONE Incorporate the `draw-*.js` JS scripts into the `src/playground.js` runner script or detail the exact instructions to runs
  these JS scripts.
* [x] DONE A JavaScript library bundled with Rollup
* [x] DONE A TypeScript library bundled with Rollup and API Extractor.
  * This was implemented in `../npm-library-rollup/`
* [x] DONE Create an example project of: a TypeScript library compiled with `tsc`
  * This was implemented in `../npm-library-typescript/`
* [x] DONE Create an example project of: A monolith-style repository with local libraries defined as NPM workspaces and a workspace that acts as the runnable
  consumer program.
