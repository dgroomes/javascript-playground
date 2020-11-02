let {Car} = require("./car")

class Truck extends Car {

    noise() {
        return "HOONK"
    }
}

module.exports = {Truck}
