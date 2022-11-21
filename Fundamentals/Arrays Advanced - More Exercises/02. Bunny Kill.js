function solve(arr) {
    let coordinates = [...arr.pop().split(" ")]
    let affectedCols = []
    let affectedLines = []
    let matrix = []
    let kills = 0
    let damage = 0
    for (let r = 0; r < arr.length; r++) matrix[r] = [];
    arr.forEach((el, index) => { matrix[index] = [...el.split(" ")].map(Number) })
    for (let c = 0; c < coordinates.length; c++) {
        coordinates[c] = coordinates[c].split(",")
        let bombLine = coordinates[c][0]
        let bombColumn = coordinates[c][1]
        for (let col = 0; col < matrix[0].length; col++) {
            for (let line = 0; line < matrix.length; line++) {
                if (line == bombLine && col == bombColumn) {
                    if (matrix[line][col] > 0) kills++
                    affectedCols = []
                    affectedLines = []
                    affectedCols.push(col - 1, col, col + 1)
                    affectedLines.push(line - 1, line, line + 1)
                    bombPower = matrix[line][col]
                    damage += bombPower
                    for (let i = 0; i < matrix.length; i++) {
                        if (affectedLines.includes(i)) {
                            matrix[i] = matrix[i].map((el, a) => {
                                if (affectedCols.includes(a)) {
                                    if (el - bombPower > 0) { return el -= bombPower } else return 0
                                } else return el
                            })
                        }
                    }
                }
            }
        }
    }
    matrix.forEach((element, row) => {
        matrix[row].forEach(el => {
            if (el > 0) { kills++ }
            damage += el
        })
    })
    console.log(damage)
    console.log(kills)
}
solve(['0 0 0',
    '0 0 0',
    '0 0 0',
    '0,0'])