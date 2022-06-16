import {animals} from "./animals.js"

export function writeAnimalsToBody() {
    const animalNames = animals.map(animal => animal.name).join()
    document.body.appendChild(animalNames);
}
