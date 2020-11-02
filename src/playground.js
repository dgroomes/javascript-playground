#!/usr/bin/env node
//
// Exploring the JavaScript programming language in a 'playground' file.

let myUtils = require('./my-utils')
let {Car} = require('./car')
let {Truck} = require('./truck')

console.log(myUtils.prettyJson({
    message: "Welcome to my javascript-playground!",
    objective: "📚 Learning and exploring JavaScript"
}))

let myCar = new Car()
myCar.describe()

let myTruck = new Truck()
myTruck.describe()
