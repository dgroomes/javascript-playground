/*
 * Utility functions
 */

/**
 * Pretty print JSON.
 * Reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
 */
function prettyJson(obj) {
    return JSON.stringify(obj, null, 2);
}

module.exports = {
    prettyJson
}
