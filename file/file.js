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
{
    const {createReadStream, createWriteStream} = require('fs')
    let sourceFile = 'README.md';
    let targetFile = 'copy-of-README.md';
    console.log(`Copying the file '${sourceFile}' asynchronously to '${targetFile}' using read and write streams...`)
    let readStream = createReadStream(sourceFile);
    let writeStream = createWriteStream(targetFile);
    let decoder = new TextDecoder()
    readStream.on('data', chunk => {
        let decoded = decoder.decode(chunk);
        console.log(`Read a chunk: ${decoded}`)
        writeStream.write(chunk)
    })

    readStream.on('close', () => {
        writeStream.close()
        console.log("Successfully copied the file.")
    })
}
