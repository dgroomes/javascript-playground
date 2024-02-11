import repl from "repl";

/*
Launch a REPL that's loaded with my other custom ES modules. This is convenient so that I can jump into the REPL and
start invoking my custom functions without having to import them manually.
*/

async function launchRepl() {
    // We must use a dynamic import (please link to technical explanation)
    const myHash = await import("./my-hash.mjs");

    // Start REPL with a custom context. Interestingly, it's called a "server".
    // Is it its own process?
    const replServer = repl.start({prompt: "(custom-repl)> "});

    // Attach each function from the myHash module to the REPL context.
    for (const [key, value] of Object.entries(myHash)) {
        console.log(`Attaching "${key}" to the REPL context`);
        replServer.context[key] = value;
    }

    // Display a clean prompt line
    replServer.prompt();
}

launchRepl();
