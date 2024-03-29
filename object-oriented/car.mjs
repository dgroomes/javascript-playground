/**
 * A simple class.
 */
export class Car {

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
        // Problem: How do we keep track of the calls to the "noise()" method from extending classes, like Truck?
        // A simple implementation would be to write `this.noisesCounter++` in the Truck's "noise()" method. But this breaks
        // encapsulation. It reduces the advantage of the base class, where ostensibly all common and "cross-cutting"
        // code can be defined.
        // Solution: see a cross-cutting solution in `proxied-car.js`. It uses a neat trick where you can return a Proxy
        // class from the constructor. UPDATE: wait, can we just call the super method, like we would in Java?
        this.noisesCounter++
        return "honk"
    }
}
