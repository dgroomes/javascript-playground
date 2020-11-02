/*
 * Utility functions
 */

/**
 * Pretty print JSON.
 */
function prettyJson(obj) {
    return JSON.stringify(obj, null, 2);
}

module.exports = {
    prettyJson
}
