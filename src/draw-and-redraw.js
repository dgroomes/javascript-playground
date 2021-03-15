// Use the NodeJS "readline" API to draw things to the console.
const readline = require("readline")

drawMessages([
    "hello!",
    "hi there 👋!",
    "I'm here!"
])

/**
 * Draw a series of messages to the console over time. Each subsequent message overwrites the previous message on the
 * screen.
 */
function drawMessages(messages) {
    if (messages.length < 2) {
        throw Error("'messages' must have a length of at least 2!")
    }
    let stream = process.stdout
    stream.write(messages[0])

    let messageIndex = 1

    const INTERVAL_MS = 1000
    const messageWritingInterval = setInterval(() => {

        // Check if exhausted the messages.
        if (messageIndex === messages.length) {
            readline.cursorTo(stream,0)
            stream.write("")
            clearInterval(messageWritingInterval)
            return
        }

        const message = messages[messageIndex]
        readline.clearLine(stream, 0)
        readline.cursorTo(stream, 0)
        stream.write(message)
        messageIndex++
    }, INTERVAL_MS)
}
