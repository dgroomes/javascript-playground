import {listAnimals} from "@dgroomes/animal-lister"

console.log("\nThis is a story about animals in the forest...")

listAnimals(animal => {
    const {name, foundIn} = animal
    let message = `A ${name} was found in the forest.`
    if (foundIn !== "forest") {
        message += ` That's odd. This animal is usually found in a ${foundIn}.`
    }
    console.log(message)
})

console.log("\nThe end.\n")
