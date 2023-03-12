function delay(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}


/*
Starting with ECMAScript 2017, we got async/await. Now we can add the 'await' keyword immediately in front of a
promise and the JavaScript runtime will wait until the promise resolves and then resume the program. It will
appear as if we are in a thread that blocks but it's only an illusion (albeit a very helpful one). Now we can write
top-down code that looks like it's synchronous, but it's actually asynchronous.

We can use the 'await' keyword in functions declared with 'async' or at the top-level of a JS module (an '.mjs' file)
like we've done here.
*/

console.log("Hello");
await delay(1000);
console.log("from");
await delay(1000);
console.log("`javascript-playground`!");
await delay(1000);
console.log("Goodbye!");
