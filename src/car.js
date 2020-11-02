/**
 * A simple class.
 */
class Car {

    describe() {
        let noise = this.noise()
        let type = this.constructor.name;
        console.log(`I'm a ${type}. I go *${noise}*`)
    }

    noise() {
        return "honk"
    }
}

module.exports = {Car}
