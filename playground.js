#!/usr/bin/env node
//
// Exploring the JavaScript programming language in a 'playground' file.

function prettyJson(obj) {
    return JSON.stringify(obj, null, 2);
}

console.log(prettyJson({"message": "hello there!"}))
