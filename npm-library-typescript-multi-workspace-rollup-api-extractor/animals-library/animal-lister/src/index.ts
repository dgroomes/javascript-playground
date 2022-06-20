import {animals} from "@dgroomes/animal-names";

/**
 * Enumerate over a list of animals. Apply the given function for each animal.
 */
export function listAnimals(fn: (Animal) => void) {
    for (const animal of animals) {
        fn(animal)
    }
}
