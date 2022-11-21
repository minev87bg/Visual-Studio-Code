function attack(arr) {
    let RLDiagonalSum = 0
    let LRDiagonalSum = 0
    let arrNew = []
    for (let i = 0; i < arr.length; i++) { arrNew.push(arr[i].split(" ")) }
    for (let i = 0; i < arrNew.length; i++) {
        RLDiagonalSum += Number(arrNew[i][i])
    }
    for (let i = 0; i < arrNew.length; i++) {
        LRDiagonalSum += Number(arrNew[i][arrNew.length - 1 - i])
    }
    if (RLDiagonalSum == LRDiagonalSum) {
        for (var a = 0; a < arrNew.length; a++) {
            for (var b = 0; b < arrNew.length; b++) {
                if (a != b && a != arrNew.length - 1 - b) {
                    arrNew[a][b] = RLDiagonalSum;
                }
            }
        }
        for (let x = 0; x < arrNew.length; x++) { console.log(arrNew[x].join(" ")) }
    }
    else { for (let x = 0; x < arr.length; x++) { console.log(arr[x]) } }
}
attack(['0 0 1',
    '0 0 0',
    '0 0 1'])