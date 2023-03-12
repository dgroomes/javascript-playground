function delay(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
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

/*
Starting with ECMAScript 2015, we got generators. With generators, we have an opportunity to invert the control flow.
In this example, we wrote our core "business logic" in a generator function ('coreProcedure') that yields promises.
From a separate section of code (below) we create the generator and then iterate over the yielded promises until the
generator is done.

In this way, we've de-coupled our core code from the mechanical "iterating and promise coordinating" code. For large
codebases, this separation can be a boon for maintenance.
*/

const generator = coreProcedure();
function iterate() {
    const {value, done} = generator.next();
    if (!done) {
        value.then(iterate); // I think you could easily accidentally create a memory leak here.
    }
}

iterate();
