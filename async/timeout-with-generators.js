function delay(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

/**
 * Starting with ECMAScript 2015, we got generators. (I barely understand generators but I think I'm on to something
 * here...).
 *
 * With generators, we have an opportunity to invert the control flow. In this example, we write our core
 * "business logic" in a generator function that yields promises. From a separate function, we create the generator and
 * then iterate over the yielded promises until the generator is complete.
 *
 * In this way, we've de-coupled our core code from the mechanical "iterating and promise coordinating" code. For large
 * codebases, this separation can be a boon for maintenance.
 */
function timeoutExampleWithGenerators() {
    const generator = coreProcedure();

    function iterate(iter) {
        const {value, done} = iter.next();
        if (!done) {
            value.then(() => iterate(iter));
        }
    }

    iterate(generator);
}

/**
 * Notice how this code reads nicely from top to bottom. Instead of having ".then" calls or "callback hell" we have the
 * "yield" keyword. This a good trade-off.
 */
function* coreProcedure() {
    console.log("Hello");
    yield delay(1000);
    console.log("from");
    yield delay(1000);
    console.log("`javascript-playground`!");
    yield delay(1000);
    console.log("Goodbye!");
    yield delay(1000);
}

timeoutExampleWithGenerators();
