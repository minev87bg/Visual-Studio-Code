function barcode(input) {
    let start = input[0]
    let end = input[1]
    let validNum = ""
    for (let i = start; i <= end; i++) {
        let valid = 0
        let checkNum = [...String(i)]
        checkNum.forEach(digit => { if (Number(digit) % 2 != 0) { valid++ } })
        if (valid == 4) { validNum += `${i} ` }
    }
    console.log(validNum)
}
barcode(["2345", "6789"])