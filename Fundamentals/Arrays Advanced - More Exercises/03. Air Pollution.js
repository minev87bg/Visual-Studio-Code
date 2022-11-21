function solve(arr1, arr2) {
    let matrix = arr1.map(row => row.split(' ').map(x => Number(x)));
    let polutedBlocks = []
    let poluted = 0
    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = arr2[i].split(" ")
        command = arr2[i][0]
        value = Number(arr2[i][1])
        switch (command) {
            case "breeze": { matrix[value].forEach((el, i) => { return matrix[value][i] = Math.max((el - 15), 0) }) } break
            case "gale": { matrix.forEach((row, index) => { row.forEach((el, i) => { if (i == value) { return matrix[index][i] = Math.max((el - 20), 0) } }) }) } break
            case "smog": { matrix.forEach((row, index) => { row.forEach((el, i) => { return matrix[index][i] = el + value }) }) } break
        }
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let currentBlock = matrix[row][col]
            if (currentBlock >= 50) { polutedBlocks.push([row, col]); poluted++ }
        }
    }
    let output = []

    polutedBlocks.forEach((row, i) => { output.push(`[${row.join("-")}]`) })
    if (poluted > 0) { console.log(`Polluted areas: ${output.join(", ")}`) } else console.log(`No polluted areas`)
}
solve(['5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25'])