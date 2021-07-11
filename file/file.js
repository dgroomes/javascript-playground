#!/usr/bin/env node

const {readFileSync} = require('fs')

{
    let file = 'README.md';
    console.log(`Reading file synchronously: ${file}...`)
    let buffer = readFileSync(file)
    let fileContent = new TextDecoder().decode(buffer)
    console.log(`File content:\n${fileContent}`)
}
