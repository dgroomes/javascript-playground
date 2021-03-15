# javascript-playground

📚 Learning and exploring JavaScript.

## Instructions

To use this script, install the dependencies with `npm install`. Then execute the script with `node src/playground.js`.

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
