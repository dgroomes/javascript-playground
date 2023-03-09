async function delay(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

/**
 * Starting with ECMAScript 2017, we got async/await. It's as easy as adding the 'async' keyword to a function and then
 * using the 'await' keyword to wait for a promise to resolve. Now we can write top-down code that looks like it's
 * synchronous, but it's actually asynchronous.
 */
async function timeoutExampleWithAsyncAwait() {
    console.log("Hello");
    await delay(1000);
    console.log("from");
    await delay(1000);
    console.log("`javascript-playground`!");
    await delay(1000);
    console.log("Goodbye!");
}

timeoutExampleWithAsyncAwait();
