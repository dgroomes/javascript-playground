import {writeAnimalsToBody} from "animals-library/dist/main.js";

console.log("\nThis is a story about animals in the forest...")
writeAnimalsToBody()
//
// for (let {name, found_in} of animals) {
//     let message = `A ${name} was found in the forest.`;
//     if (found_in !== "forest") {
//         message += ` That's odd. This animal is usually found in a ${found_in}.`
//     }
//     console.log(message)
// }
//
// console.log("\nThe end.\n")
