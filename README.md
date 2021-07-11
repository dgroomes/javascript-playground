# javascript-playground

📚 Learning and exploring JavaScript.

## Instructions

Follow these instructions to run the code.

* Install dependencies:
  * `npm install`
* Execute the playground JavaScript code:
  * `node src/playground.js`

## Materials referenced

* [MDN web docs: JavaScript classes reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [MDN web docs: `export` keyword](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)
* [MDN web docs: `import` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
* [MDN web docs: `JSON.stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
* [MDN web docs: Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
* [MDN web docs: Reflect](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
* [nodejs: ECMAScript modules](https://nodejs.org/api/esm.html#esm_enabling)
* [StackOverflow question and answer: a form of multi-module projects](https://stackoverflow.com/a/29787493)


## Wish List
   
General clean ups, TODOs and things I wish to implement for this project:

* Explore options to bundle the source code into a single HTML file. Why? I think the "single document" model (i.e. just
  a `index.html` and no other files) is killer. For a few reasons. For one, it's the only way to run JavaScript in the
  browser from a file (although I think browser vendors are experimenting with other sandboxed options I think...). Running
  code from a file is the most approachable way for a new developer. Makes the project approachable. The second reason
  is that I think a single document is easier to grok than a program with multiple sources (I didn't articulate this very
  well, but I mean it).
* Incorporate the `draw-*.js` JS scripts into the `src/playground.js` runner script or detail the exact instructions to runs
  these JS scripts.

Finished items:

* DONE Parse commandline arguments passed to Node
* DONE Node has some fancy console logging features in its standard libraries, like the `console.table` function. Is there
  more? Is there a way to update the output printed to the console dynamically? Like a progress bar? Answer: well, I found
  a very popular library called "cli-progress" so I'll just use that. And under the hood, it uses a lower-level abstraction
  called `Terminal` to render the content to the terminal. So with some more studying, I could learn from the `Terminal`
  code to figure out how to draw arbitrary stuff to the console.
* DONE Draw arbitrary stuff to the console, and *re-draw* new stuff that overwrites the old stuff, using "cli-progress"'s
  `Terminal` abstraction.  
* DONE Replace "Terminal" usage with plain "readline"
* DONE Do another "draw to the terminal" example similar to what "cli-progress" does and the "readline" example does but do it
  over multiple lines.
