#!/usr/bin/env node

// Showcasing examples that print to the console.
//
// Unfortunately, we need to use the Promise-oriented programming model to run these example programs instead of the `await`
// operator. JavaScript does not allow the `async` operator to be used at the top-level. It would be great if it did.
// We must use Promises to schedule these functions so that they run in serial, one after the other. This programming model
// couples these function invocations together, by way of chaining promises with the "then" function. This, in my opinion,
// makes for code that is not as readable as procedural code using the `await` operator.
{
    /**
     * Draw a series of messages to the console over time. Each subsequent message overwrites the previous message on the
     * screen.
     */
    const {drawMessages} = require('./draw-and-redraw');
    drawMessages([
        "hello!",
        "hi there 👋!",
        "I'm here!"
    ]).then(() => {
        console.log("\n")

        /**
         * Draw a multiline message to the console using the "draftlog" library and re-draw the message with additional
         * exclamation points (!) over a period of time.
         */
        const {drawMessageMultiline} = require('./draw-and-redraw-multiline')
        drawMessageMultiline(
            `hello
hi there 👋
I'm here`)
    })
}
