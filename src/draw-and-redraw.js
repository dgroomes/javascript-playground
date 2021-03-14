// Use "cli-progress" to draw things to the console.

drawMessages([
    "hello!",
    "hi there 👋!",
    "I'm here!"
])

/**
 * Get the "Terminal" class from the "cli-progress" libraray. The Terminal class is not exported and is not meant to be
 * used directly. Instead, it is meant to be used only by the "cli-progress" library but I want to use it.
 */
function getTerminal() {
    const {Bar} = require("cli-progress")
    let bar = new Bar()
    let terminal = bar.terminal
    return terminal.constructor
}

/**
 * Draw a series of messages to the console over time. Each subsequent message overwrites the previous message on the
 * screen.
 */
function drawMessages(messages) {
    if (messages.length < 2) {
        throw Error("'messages' must have a length of at least 2!")
    }
    const Terminal = getTerminal()
    const terminal = new Terminal(process.stderr)
    terminal.write(messages[0])

    let messageIndex = 1

    const INTERVAL_MS = 1000;
    const messageWritingInterval = setInterval(() => {

        // Check if exhausted the messages.
        if (messageIndex === messages.length) {
            terminal.cursorTo(0, null);
            terminal.write("")
            clearInterval(messageWritingInterval)
            return
        }

        const message = messages[messageIndex]
        terminal.clearLine()
        terminal.cursorTo(0, null)
        terminal.write(message)
        messageIndex++
    }, INTERVAL_MS)
}
