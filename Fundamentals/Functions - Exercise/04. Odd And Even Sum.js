function solve(num) {
    let numString = num.toString()
    let oddSum = 0
    let evenSum = 0
    for (let i = 0; i < numString.length; i++) {
        if (Number(numString[i]) % 2 == 0) { evenSum += Number(numString[i]) } else { oddSum += Number(numString[i]) }
    }
    console.log(` Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
solve(1000435)