#!/usr/bin/env node
//
// Exploring the JavaScript programming language in a 'playground' file.

let {printPrettyJson} = require('./my-utils')
let {Car} = require('./car')
let {Truck} = require('./truck')
let {TruckV2} = require('./truck-v2')

printPrettyJson({
    message: "Welcome to my javascript-playground!",
    objective: "📚 Learning and exploring JavaScript"
})

let myCar = new Car()
myCar.describe()
myCar.describe()
myCar.describe()
console.log(`myCar.noisesCounter: ${myCar.noisesCounter}`)

let myTruck = new Truck()
myTruck.describe()
myTruck.describe()
myTruck.describe()
myTruck.describe()
console.log(`myTruck.noisesCounter: ${myTruck.noisesCounter}`)

/*
 * Let's learn about the Proxy class.
 *
 * We will proxy the myTruck object to log and increment a counter each time myTrack is accessed via the Proxy.
 *
 * Modeled after https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 */
let counter = 0
let handler = {
    get: function (target, prop, receiver) {
        counter++
        console.log(`[myTruckProxy handler] invoked with prop=${prop} counter=${counter}`)
        return Reflect.get(...arguments)
    }
};

let myTruckProxy = new Proxy(myTruck, handler)

myTruckProxy.describe()
myTruckProxy.noisesCounter
myTruckProxy.noisesCounter

let myTruckV2 = new TruckV2()
myTruckV2.describe()
