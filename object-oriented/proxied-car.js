let {Car} = require('./car')

/**
 * Enabling a proxy in a class hierarchy by using (exploiting?) a feature of constructors.
 *
 * This one goes in the "JavaScript is wild but fun" category. See `evasive.js` for an example of the aforementioned
 * constructor feature that lets us replace the normal return value from a `new MyClass() invocation and instead return
 * an object of own choosing. In this class, we use this feature to return a proxy of the class instance.
 */
class ProxiedCar extends Car {

    constructor() {
        super();
        console.log(`[ProxiedCar] constructing...`)
        let handler = {
            get: function (target, prop, receiver) {
                if (prop === "noise") {
                    if (target.constructor.name !== Car) {
                        target.noisesCounter++
                    }
                }
                return Reflect.get(...arguments)
            }
        }
        return new Proxy(this, handler)
    }
}

module.exports = {ProxiedCar}
