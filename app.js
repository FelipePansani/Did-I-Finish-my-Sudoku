let wrongLine = [0, 0, 0, 1, 1, 2, 3, 4, 5, 6, 7, 7, 9, 9, 9]

let rightLine = [5, 3, 4, 6, 7, 8, 9, 1, 2]

let newBoard = [[5, 3, 4, 3, 6, 5, 8, 7, 9],
[6, 7, 2, 4, 6, 5, 8, 7, 9],
[1, 9, 8, 3, 6, 5, 8, 7, 9]]

let completeBoard = [[1, 2, 3, 4, 5, 6, 7, 8, 9], // Finished!
[7, 8, 9, 1, 2, 3, 4, 5, 6],
[4, 5, 6, 7, 8, 9, 1, 2, 3],

[2, 3, 4, 5, 6, 7, 8, 9, 1],
[5, 6, 7, 8, 9, 1, 2, 3, 4],
[8, 9, 1, 2, 3, 4, 5, 6, 7],

[3, 4, 5, 6, 7, 8, 9, 1, 2],
[6, 7, 8, 9, 1, 2, 3, 4, 5],
[9, 1, 2, 3, 4, 5, 6, 7, 8]]

let SecondCompleteBoard = [[5, 3, 4, 6, 7, 8, 9, 1, 2], // Finished!
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]]

let ThirdCompleteBoard = [[5, 3, 4, 6, 7, 8, 9, 1, 2], // Try again.
[6, 7, 2, 1, 9, 0, 3, 4, 8],
[1, 0, 0, 3, 4, 2, 5, 6, 0],
[8, 5, 9, 7, 6, 1, 0, 2, 0],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 0, 1, 5, 3, 7, 2, 1, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 0, 0, 4, 8, 1, 1, 7, 9]]

let incompleteBoard = []

const IntegersFromOneToNine = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function CheckWholeLine(anyLine) {
    if (anyLine.filter((item, index) => anyLine.indexOf(item) !== index).length > 0 || IntegersFromOneToNine.filter(item => anyLine.indexOf(item) === -1).length > 0 || anyLine.filter(item => item > 9 || item <= 0).length > 0) {
        return false;
    }
    else {
        return true;
    }
}

function CheckWholeBoard(anyBoard) {
    let wrongLines = 0;

    //CHECK EVERY LINE
    for (let x = 0; x <= 8; x += 1) {
        CheckWholeLine(anyBoard[x]) === false ? wrongLines += 1 : ''
    }

    //CHECK EVERY ROW
    let newLine = []
    for (let y = 0; y < 10; y += 1) {
        if (newLine.length > 0) { CheckWholeLine(newLine) === false ? wrongLines += 1 : '' }

        newLine = []
        for (let z = 0; z < 9; z += 1) {
            newLine.push(anyBoard[z][y]);
        }
    }

    //CHECK EVERY SQUARE
    let newSquare = []

    for (let a = 0; a <= 6; a += 3) {
        for (let b = 0; b <= 6; b += 3) {
            newSquare = []
            for (let x = 0; x <= 2; x += 1) {
                for (let y = 0; y <= 2; y += 1) {
                     newSquare.push(anyBoard[x+a][b+y])
                }
            }
            CheckWholeLine(newSquare) === false ? wrongLines += 1 : '' 
        }
    }

    //PRINT RESULT
    if (wrongLines > 0) {
        return 'Try again.'
    }
    else {
        return 'Finished!'
    }
}

console.log(CheckWholeBoard(completeBoard))
console.log(CheckWholeBoard(SecondCompleteBoard))
console.log(CheckWholeBoard(ThirdCompleteBoard))

//console.log(CheckWholeBoard(completeBoard))
