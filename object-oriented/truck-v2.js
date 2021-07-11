let {ProxiedCar} = require("./proxied-car")

/**
 * EXPERIMENTAL
 *
 * This is a version 2 (v2) of the Truck class ("truck.js").
 *
 * It uses ProxiedCar instead of Car.
 */
class TruckV2 extends ProxiedCar {

    noise() {
        return "HOONK"
    }
}

module.exports = {TruckV2}
