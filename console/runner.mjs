#!/usr/bin/env node

// Print dynamic content to the console with `readline` and DraftLog.

import {drawMessages} from "./draw-and-redraw.mjs";
import {drawMessageMultiline} from "./draw-and-redraw-multiline.mjs";


// Draw a series of messages to the console over time. Each subsequent message overwrites the previous message on the
// screen.
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
await drawMessageMultiline(
        `Greetings
Hiya there 👋
Nice to meet you`);
