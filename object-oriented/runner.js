#!/usr/bin/env node

/**
 * A basic example that showcases JavaScript classes (introduced in "ECMAScript 2015" a.k.a. ES6)
 */
{
    let {Car} = require('./car')
    let {Truck} = require('./truck')

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
    console.log("")
}

/*
 * Let's learn about the Proxy class.
 *
 * We will proxy the myTruck object to log and increment a counter each time myTrack is accessed via the Proxy.
 *
 * Modeled after https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 */
{
    let {Truck} = require('./truck')

    let myTruck = new Truck()
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
    console.log("")
}

/*
 * Showcasing my `TrackV2` and by extension my `ProxiedCar` classes
 */
{
    let {TruckV2} = require('./truck-v2')

    let myTruckV2 = new TruckV2()
    myTruckV2.describe()
    myTruckV2.describe()
    console.log(`myTruckV2.noisesCounter: ${myTruckV2.noisesCounter}`)
    console.log("")
}

/*
 * Showcasing my `Evasive` class
 */
{
    let {Evasive, EvasiveSubclass} = require('./evasive')

    let evasive = new Evasive()
    console.log(`evasive.constructor.name: ${evasive.constructor.name}`) // wow, it's an Array and not an instace of Evasive!
    let evasiveSubclass = new EvasiveSubclass()
    console.log(`evasiveSubclass.constructor.name: ${evasiveSubclass.constructor.name}`) // ?
    console.log("")
}
