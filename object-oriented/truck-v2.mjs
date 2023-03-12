import {ProxiedCar} from "./proxied-car.mjs"

/**
 * This is a version 2 (v2) of the Truck class ("truck.js").
 *
 * It uses ProxiedCar instead of Car.
 */
export class TruckV2 extends ProxiedCar {

    noise() {
        return "HOONK"
    }
}
