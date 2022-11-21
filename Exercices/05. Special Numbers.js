function specialNum(input) {
    let n = Number(input[0])
    let valid = [0]
    let iValid = ""
    for (let i = 1111; i <= 9999; i++) {
        let iString = String(i)
        for (let a = 0; a < 4; a++) {
            let iDigit = Number(iString[a])
            if (n % iDigit == 0) { valid[a] = 1 } else { valid[a] = 0 }
        }
        if (!valid.includes(0)) { iValid += `${i} ` }
        valid = [0]
    }
    console.log(iValid)
}
specialNum(["16"])