let arr;
let n = 5;
let queenPos = [1, 2]
let gameBoard;
let go = true;

const continueDrawing = (op) => go = op;

//easier to work with
let queen = {
    x: 0,
    y: 0
};

function createAndFillTwoDArray(rows, columns, defaultValue) {
    return Array.from({
        length: rows
    }, () => (
        Array.from({
            length: columns
        }, () => defaultValue)
    ))
}

gameBoard = (createAndFillTwoDArray(n, n, " "))
setQueenPos(queenPos[0], queenPos[1]);

//translate board positions to array positions
function setQueenPos(x, y) {
    x = Math.abs(x - n)
    y = Math.abs(y - 1)
    gameBoard[x][y] = "Q"
    queen.x = y
    queen.y = x
}

//draws all availible movements
function drawQueenMoves(queen) {
    //diagonal lines
    drawLine(queen.x, queen.y, [1, 1])
    drawLine(queen.x, queen.y, [1, -1])
    drawLine(queen.x, queen.y, [-1, 1])
    drawLine(queen.x, queen.y, [-1, -1])
    //vertical and horizontal lines
    drawLine(queen.x, queen.y, [0, -1])
    drawLine(queen.x, queen.y, [1, 0])
    drawLine(queen.x, queen.y, [0, 1])
    drawLine(queen.x, queen.y, [-1, 0])

}

function drawLine(pos1, pos2, quadrant) {

    let x = pos1;
    let y = pos2;
    continueDrawing(true)
    while (go) {
        x = x + quadrant[0]
        y = y + quadrant[1]
        drawPoint(x, y)
    }
}
//tries to draw a + on location, if unable or outside of bounds, stops!
function drawPoint(x, y) {
    if (!isInsideBoard(x, y)) {
        continueDrawing(false)
        return;
    }
    if (gameBoard[y][x] === "x") {
        console.log("STOP!")
        continueDrawing(false)
        return;
    }
    gameBoard[y][x] = "+";
}

//checks if given coord is valid (inside the board)
function isInsideBoard(x, y) {
    if (x > n - 1 || x < 0 || y > n - 1 || y < 0) {
        return false;
    }
    return true;
}

//gameBoard[2][1] = "x";
//gameBoard[3][3] = "x";


drawQueenMoves(queen)

console.log(gameBoard)
let cont = 0;
gameBoard.forEach(row => {
    cont += row.filter(value => value === "+").length;
});

console.log(cont)
