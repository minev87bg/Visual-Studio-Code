function spiral(rows, cols) {
    let counter = 1
    let maxCounter = rows * cols
    let [leftCol, rightCol, botRow, topRow] = [0, cols - 1, rows - 1, 0]
    let matrix = []
    for (let r = 0; r < rows; r++) matrix[r] = [];
    while (counter <= maxCounter) {
        for (let c = leftCol; c <= rightCol && counter <= maxCounter; c++) { matrix[topRow][c] = counter++ }
        topRow++
        for (let r = topRow; r <= botRow && counter <= maxCounter; r++) { matrix[r][rightCol] = counter++ }
        rightCol--
        for (let c = rightCol; c >= leftCol && counter <= maxCounter; c--) { matrix[botRow][c] = counter++ }
        botRow--
        for (let r = botRow; r >= topRow && counter <= maxCounter; r--) { matrix[r][leftCol] = counter++ }
        leftCol++
    }
    for (let i = 0; i < matrix.length; i++) { console.log(matrix[i].join(" ")) }
}
spiral(5, 5)