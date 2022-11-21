function sumNumbers(input) {
    let a = Number(input[0])
    let i = 1
    let sum = 0
    while (sum < a) {
        sum += Number(input[i]); i++
        if (sum>a) {break}
    }
    console.log(sum)
}
sumNumbers(["20","1","2","3","4","5","6"])