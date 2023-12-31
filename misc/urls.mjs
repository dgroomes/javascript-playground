// Given some logical path name, try various combinations of Node.js APIs to format it as a file or HTTP url.

import {format, pathToFileURL} from 'url';

const myPath = 'some/file';

// Get a string in the form of a "file://". Use idiomatic Node.js APIs.
const fileUrl = pathToFileURL(myPath).toString();
console.log({ fileUrl });

// Get a string in the form of a "http://" url. Use idiomatic Node.js APIs. We need to also specify the hostname and port.
const protocol = 'http';
const hostname = 'localhost';
const port = 3000;
const httpUrl = format({ protocol, hostname, port, pathname: myPath });
console.log({ httpUrl });
