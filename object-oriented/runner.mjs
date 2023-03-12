#!/usr/bin/env node

/*
A basic example that showcases JavaScript classes (introduced in "ECMAScript 2015" a.k.a. ES6)
*/

import {Car} from "./car.mjs"
import {Truck} from "./truck.mjs"
import {TruckV2} from "./truck-v2.mjs"
import {Evasive, EvasiveSubclass} from "./evasive.mjs"

{
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
    let evasive = new Evasive()
    console.log(`evasive.constructor.name: ${evasive.constructor.name}`) // wow, it's an Array and not an instance of Evasive!
    let evasiveSubclass = new EvasiveSubclass()
    console.log(`evasiveSubclass.constructor.name: ${evasiveSubclass.constructor.name}`) // ?
    console.log("")
}

/**
 * Proxying a function. How does that work? It doesn't have "properties" like an object would. Normally with a JavaScript
 * Proxy object, you intercept access attempts to its properties and then run some instrumented code. But when the thing
 * being proxied is a function, how do you intercept the invocation of the function?
 *
 * Answer: the trick is to define the 'apply' accessor/function/thing.
 */
{
    console.log("Proxying a function.")
    function hi() {
        return console.log("hi there!")
    }

    let proxy = new Proxy(hi, {
        apply() {
            console.log("The proxy's 'apply' was called")
            return Reflect.apply(...arguments)
        }
    })

    console.log("Invoking the proxy object that proxies the 'hi()' function:")
    proxy()
    console.log("")
}
