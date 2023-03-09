/**
 * In 2014 and earlier, we only had callbacks in JavaScript. This is a sample function that uses the 'setTimeout'
 * function directly and supplies callbacks.
 *
 * While callbacks are perfectly valid, they can become unwieldy and difficult to compose as the program grows. Notice
 * how nested the code becomes (how far right the code becomes indented). This is a form of complexity.
 *
 * Move over to the 'timeout-with-promises.js' file to see how we can implement the same effect but with promises.
 */
function timeoutExampleWithCallbacks() {
    console.log("Hello");
    setTimeout(() => {
        console.log("from");
        setTimeout(() => {
            console.log("`javascript-playground`!")
            setTimeout(() => {
                console.log("Goodbye!");
            }, 1000);
        }, 1000);
    }, 1000);
}

timeoutExampleWithCallbacks();
