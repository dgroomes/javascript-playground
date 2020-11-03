/**
 * This class is evasive. It returns something other than itself when it is "newed" up via "new Evasive()"
 *
 * Reference https://stackoverflow.com/questions/3350215/what-is-returned-from-a-constructor
 */
class Evasive {
    constructor() {
        console.log("[Evasive] Hello from the constructor")
        return new Array(1,2,3)
    }
}

/**
 * Does a super class whose constructor returns a value have any effect on the sub-class? ANSWER: yes. wow!
 */
class EvasiveSubclass extends Evasive {
    constructor() {
        super();
        console.log("[EvasiveSubclass] Hello from the constructor")
    }
}

module.exports = {Evasive, EvasiveSubclass}
