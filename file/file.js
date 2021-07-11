#!/usr/bin/env node

const {readFileSync} = require('fs')

{
    let file = 'README.md';
    console.log(`Reading file synchronously: ${file}...`)
    let buffer = readFileSync(file);
    console.log(`Buffer length: ${buffer.length}`)
}
