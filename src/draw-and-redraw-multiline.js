const DraftLog = require('draftlog')
DraftLog(console)

drawMessageMultiline(
`hello
hi there 👋
I'm here`
)

/**
 * Draw a multiline message to the console using the "draftlog" library and re-draw the message with additional
 * exclamation points (!) over a period of time.
 */
function drawMessageMultiline(message) {
    const draft = console.draft(message)
    const limit = 5
    let idx = 1
    const messagingInterval = setInterval(() => {
        if (idx === limit) {
            clearInterval(messagingInterval)
            return
        }

        message = message.replace(/$/mg, "!")
        draft(message)
        idx++
    }, 1000)
}
