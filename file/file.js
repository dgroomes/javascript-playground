#!/usr/bin/env node

// Read a file
{
    const {readFileSync} = require('fs')
    let file = 'README.md';
    console.log(`Reading file synchronously: ${file}...`)
    let buffer = readFileSync(file)
    let fileContent = new TextDecoder().decode(buffer)
    console.log(`File content:\n${fileContent}`)
}

// Copy a file using read and write streams.
// After this code executes, you should see the file 'copy-of-README.md' appear which is a content copy of the file
// 'README.md'.
{
    const {createReadStream, createWriteStream} = require('fs')
    let sourceFile = 'README.md';
    let targetFile = 'copy-of-README.md';
    console.log(`Copying the file '${sourceFile}' asynchronously to '${targetFile}' using read and write streams...`)
    let readStream = createReadStream(sourceFile);
    let writeStream = createWriteStream(targetFile);
    readStream.on('data', chunk => {
        writeStream.write(chunk)
    })

    readStream.on('close', () => {
        writeStream.close()
        console.log("Successfully copied the file.")
    })
}

// Copy a file with substitutions. This is a templating pattern.
// After this code executes, you should see a file named 'copy-of-with-substitutions-README.md' which is a copy of the file
// 'README.md' but with the followig substitutions:
// * 'TODO' is replaced with 'ITEM'
// * 'IN PROGRESS' is replaced with 'STARTED'
// * 'DONE' is replaced with 'FINISHED'
{
    const {createReadStream, createWriteStream} = require('fs')
    let sourceFile = 'README.md';
    let targetFile = 'copy-of-with-substitutions-README.md';
    console.log(`Copying the file '${sourceFile}' asynchronously to '${targetFile}' using read and write streams...`)
    let readStream = createReadStream(sourceFile);
    let writeStream = createWriteStream(targetFile);
    let decoder = new TextDecoder()
    readStream.on('data', chunk => {
        let decoded = decoder.decode(chunk)
        let substituted = decoded
            .replace(/TODO/, 'ITEM')
            .replace(/IN PROGRESS/, 'STARTED')
            .replace(/DONE/, 'FINISHED')
        writeStream.write(substituted)
    })

    readStream.on('close', () => {
        writeStream.close()
        console.log("Successfully copied the file with substitutions.")
    })
}
