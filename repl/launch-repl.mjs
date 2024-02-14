import repl from "repl";
import * as MyHash from "./my-hash.mjs";

/**
 * Launch a REPL that "pre-imports" my other code. This is convenient so that I can jump into the REPL and start
 * invoking my custom functions without having to import them manually. This is good for quick testing and debugging.
 */
async function launchRepl() {
    // Start a REPL programmatically. This similar to running `node` in the terminal. But by doing it programmatically
    // we can customize things like the prompt, global variables, and more.
    const replServer = repl.start({prompt: "(custom-repl)> "});

    // Attach each function from the MyHash module to the REPL context.
    for (const [key, value] of Object.entries(MyHash)) {
        console.log(`Attaching "${key}" to the REPL context`);
        replServer.context[key] = value;
    }

    // Display a clean prompt line
    replServer.prompt();
}

// noinspection JSIgnoredPromiseFromCall
launchRepl();
