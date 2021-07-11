const DraftLog = require('draftlog')
DraftLog(console)

/**
 * Draw a multiline message to the console using the "draftlog" library and re-draw the message with additional
 * exclamation points (!) over a period of time.
 * @return {Promise<void>} a Promise that resolves when the drawing has finished
 */
function drawMessageMultiline(message) {
    return new Promise((resolve, _) => {
        const draft = console.draft(message)
        const limit = 5
        let idx = 1
        const messagingInterval = setInterval(() => {
            if (idx === limit) {
                clearInterval(messagingInterval)
                resolve()
                return
            }

            message = message.replace(/$/mg, "!")
            draft(message)
            idx++
        }, 1000)
    })
}

module.exports = {drawMessageMultiline}
