function specialNumbers(num) {
    let sum = 0
    let status
    for (let a = 1; a <= num; a++) {
        let aStr = a.toString()
        for (let i = aStr.length - 1; i >= 0; i--) { sum += Number(aStr[i]) }
        if (sum == 5 || sum == 7 || sum == 11) { status = "True" } else status = "False"
        sum = 0
        console.log(`${a} -> ${status}`)
    }
}
specialNumbers(15)