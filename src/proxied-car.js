let {Car} = require('./car')

/**
 * EXPERIMENTAL
 *
 * Can we define a class hierarchy that can somehow proxy itself? Specifically, can I introduce a class in the class
 * hierarchy, like ProxiedCar, which can proxy its super class (Car)? Why do I want to do that? Well, to learn
 * something.
 *
 * NOTE 1: I don't think it's possible to use a literal 'Proxy' instance. Hard to explain.
 *
 * NOTE 2: in the ProxiedCar constructor, can we enumerate the properties of the sub-class and replace them with
 * "point-cutted" versions? I am inspired by https://gist.github.com/dschnare/1235559/52ae8ff147262d54451a43efb829f72ba9a5c19e
 */
class ProxiedCar extends Car {

    constructor() {
        super();
        console.log(`[ProxiedCar] constructing...`)
    }

    // this doesn't work. how do getters and sub-classes interoperate? they don't, right??
    // get noise () {
    //     console.log(`[ProxiedCar] 'noise' was accessed`)
    // }
}

module.exports = {ProxiedCar}
