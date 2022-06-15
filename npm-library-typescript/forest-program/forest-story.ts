import {animals} from "animals-library/animals.js";

console.log("\nThis is a story about animals in the forest...")

for (let {name, foundIn} of animals) {
    let message = `A ${name} was found in the forest.`;
    if (foundIn !== "forest") {
        message += ` That's odd. This animal is usually found in a ${foundIn}.`
    }
    console.log(message)
}

console.log("\nThe end.\n")
