import readline from "readline"

console.log(`Let's play Tic-Tac-Toe!

Player 1 goes first. Try to connect three Xs in a row!


          Left    Middle    Right
Top             |        | 
        --------|--------|--------  
Middle          |        | 
        --------|--------|--------  
Bottom          |        | 

Where do you want to place an 'X'?
Type your selection in two letters. The options are:

* 'tl' for the top row and left column  
* 'tm' for the top row and middle column  
* 'tr' for the top row and right column
* 'ml' for the middle row and left column  
* 'mm' for the middle row and middle column  
* 'mr' for the middle row and right column
* 'bl' for the bottom row and left column  
* 'bm' for the bottom row and middle column  
* 'br' for the bottom row and right column
`)

const state = {
    // Who is the active player. Rather, "Who's turn is it right now"?
    player: 1,

    // The board state is represented in two bitmaps. (Admittedly, this is kind of a strange implementation for tic-tac-toe,
    // but I want to learn about bitwise operators).
    //
    // Each bit in the 'player1Positions' bitmap models the state of the 'X' check at a point on the tic-tac-toe board.
    // If the bit is 1, then there is an 'X' there. The order of the bit places correspond to the order of the board
    // boxes, row by row, starting with the top row and leftmost box. IN other words, there are nine bit places and
    // there are nine boxes on the board.
    //
    // The 'player2Positions' bitmap follows the same idea, but for 'O' checks.
    //
    // Learn about bitmaps here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR
    player1Positions: 0b000000000,
    player2Positions: 0b000000000
}

const pointsMap = {
    tl: 0b100000000,
    tm: 0b010000000,
    tr: 0b001000000,
    ml: 0b000100000,
    mm: 0b000010000,
    mr: 0b000001000,
    bl: 0b000000100,
    bm: 0b000000010,
    br: 0b000000001,
}

const legalMoves = globalThis.structuredClone(pointsMap)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/**
 * Check the player's positions ('X's or 'O's on the board) for a win condition.
 * Did the get three in a row horizontally, vertically or diagonally?
 *
 * @param positions the current player's board positions (as a bitmap)
 */
function checkWin(positions) {
    if (
        positions === (positions | 0b111000000) ||
        positions === (positions | 0b000111000) ||
        positions === (positions | 0b000000111) ||
        positions === (positions | 0b100100100) ||
        positions === (positions | 0b010010010) ||
        positions === (positions | 0b001001001) ||
        positions === (positions | 0b100010001) ||
        positions === (positions | 0b001010100)) {
        console.log(`Player ${state.player} wins! 🎉`)
        rl.close()
    }
}

function acceptMove(move) {
    move = move.toLowerCase()
    const point = pointsMap[move]

    if (point === undefined) {
        rl.question(`The move '${move}' is not recognized. Try another one.\nNext move > `, acceptMove)
        return
    }

    if (legalMoves[move] === undefined) {
        rl.question(`The move '${move}' has already been made. Try another one.\nNext move > `, acceptMove)
        return
    }

    delete legalMoves[move]

    if (state.player === 1) {
        state.player1Positions = state.player1Positions | point
        checkWin(state.player1Positions)
        state.player = 2
    } else {
        state.player2Positions = state.player2Positions | point
        checkWin(state.player2Positions)
        state.player = 1
    }

    // TODO check for a draw

    /**
     * Render a row string.
     *
     * E.g. 'x - o', 'x x o', '- - -'
     */
    function renderRow(xPositions, oPositions) {
        // Remember your JS order of operations: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
        let left = (xPositions & 0b100) ? 'x' : (oPositions & 0b100) ? 'o' : '-';
        let middle = (xPositions & 0b010) ? 'x' : (oPositions & 0b010) ? 'o' : '-';
        let right = (xPositions & 0b001) ? 'x' : (oPositions & 0b001) ? 'o' : '-';
        return [left, middle, right].join(' ')
    }

    let boardRender = renderRow(state.player1Positions >> 6, state.player2Positions >> 6)
    boardRender += "\n"
    boardRender += renderRow(state.player1Positions >> 3, state.player2Positions >> 3)
    boardRender += "\n"
    boardRender += renderRow(state.player1Positions, state.player2Positions)
    boardRender += "\n"

    console.log(boardRender)

    rl.question("Next move > ", acceptMove)
}

rl.question(`> `, acceptMove)

rl.on('close', function () {
    console.log('\nThat was fun!')
    process.exit(0)
})
