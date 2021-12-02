#!/usr/bin/env node

// Print dynamic content to the console with `readline` and DraftLog.
//
// JavaScript does not allow the `await` operator to be used at the top-level. It would be great if it did.
// Instead, we must wrap what would be our top-level content in an arbitrarily named async function. I'll use "exec".

async function exec() {

    // Draw a series of messages to the console over time. Each subsequent message overwrites the previous message on the
    // screen.
    const {drawMessages} = require('./draw-and-redraw');
    await drawMessages([
        "Hello",
        "Hi there 👋",
        "Hellooo!"
    ]);

    console.log("\n");

    // Next, let's write something that spans multiple lines and updates over time. Interestingly, this is much harder
    // to implement. I didn't even try to figure out how to do it and instead just used the excellent "DraftLog"
    // library. The below code draws a multi-line message to the screen, then adds trailing exclamation points (!) over
    // a period of time.
    const {drawMessageMultiline} = require('./draw-and-redraw-multiline');
    drawMessageMultiline(
        `Greetings
Hiya there 👋
Nice to meet you`);
}

// noinspection JSIgnoredPromiseFromCall
exec();
