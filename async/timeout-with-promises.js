// With a working knowledge of the Promise API introduced in ECMAScript 2015, we can adapt 'setTimeout' into a
// promise-returning function. Tip: You can "promisify" all sorts of code.
async function delay(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}
function timeoutExampleWithPromises() {
    console.log("Hello");
    delay(1000)
        .then(() => {
            console.log("from");
            return delay(1000);
        })
        .then(() => {
            console.log("`javascript-playground`!");
            return delay(1000);
        })
        .then(() => {
            console.log("Goodbye!");
        });
}

timeoutExampleWithPromises();
