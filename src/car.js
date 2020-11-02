/**
 * A simple class.
 */
class Car {

    constructor() {
        // For observability, let's keep track of the number of times the "noise" method has been called
        this.noisesCounter = 0
    }

    describe() {
        let noise = this.noise()
        let type = this.constructor.name;
        console.log(`I'm a ${type}. I go *${noise}*`)
    }

    noise() {
        // Problem: how do we keep track of the calls to the "noise()" method from extending classes, like Truck?
        // A simple implementation would be to write `this.noisesCounter++` in the Truck's "noise()" method. But this is
        // duplicative and in part defeats the advantage of having a base class, where ostensibly all common and "cross-cutting"
        // code can be defined.
        this.noisesCounter++
        return "honk"
    }
}

module.exports = {Car}
