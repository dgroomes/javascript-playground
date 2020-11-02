let {Car} = require("./car")

class Truck extends Car {

    makeNoise() {
        console.log("I'm a trunk. I go HOONK")
    }
}

module.exports = {Truck}
