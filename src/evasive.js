/**
 * This class is evasive. It returns something other than itself when it is "newed" up via "new Evasive()"
 *
 * Reference https://stackoverflow.com/questions/3350215/what-is-returned-from-a-constructor
 */
class Evasive {
    constructor() {
        return new Array(1,2,3)
    }
}

module.exports = {Evasive}
