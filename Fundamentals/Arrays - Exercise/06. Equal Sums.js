function eqSums(arr) {
    let sumLeft
    let sumRight
    let flag = "false"
    let trueIndex = 0
    for (let a = 0; a < arr.length; a++) {
        if (a - 1 < 0) { sumLeft = 0 }
        else {
            sumLeft = 0
            for (let b = a - 1; b >= 0; b--) {
                sumLeft += arr[b]
            }
        }
        if (a + 1 == arr.length) { sumRight = 0 }
        else {
            sumRight = 0
            for (let c = a + 1; c < arr.length; c++) {
                sumRight += arr[c]
            }
        }
        if (sumLeft == sumRight) { flag = "true"; trueIndex = a }
        //console.log(`${sumLeft} - ${sumRight} (${a})`)
    }
    if (flag == "true") { console.log(trueIndex) } else console.log("no")
}
eqSums([1, 2, 3])