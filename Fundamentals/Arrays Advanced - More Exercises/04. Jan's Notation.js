function solve(arr) {
    let numArr = arr.filter((el, i) => { if (!isNaN(el)) return el })
    let opArr = arr.filter(el => { if (isNaN(el)) return el })
    let flag = ""
    let operator
    if (numArr.length - opArr.length > 1) { console.log("Error: too many operands!"); flag = "false" }
    else if (numArr.length - opArr.length <= 0) { console.log("Error: not enough operands!"); flag = "false" }
    else {
        numArr = []
        flag = "true"
        for (let i = 0; i < arr.length; i++) {
            if (isNaN(arr[i])) {
                operator = arr[i]
                if (numArr.length >= 2) {
                    n1 = Number(numArr[numArr.length - 2])
                    n2 = Number(numArr[numArr.length - 1])
                    switch (operator) {
                        case "+": { numArr.splice(Math.max((numArr.length - 2), 0), 2, n1 + n2) } break
                        case "-": { numArr.splice(Math.max((numArr.length - 2), 0), 2, n1 - n2) } break
                        case "/": { numArr.splice(Math.max((numArr.length - 2), 0), 2, n1 / n2) } break
                        case "*": { numArr.splice(Math.max((numArr.length - 2), 0), 2, n1 * n2) } break
                    }
                }
            }
            else { numArr.push(arr[i]) }
        }
    }
    if (flag == "true") { console.log(numArr.join("")) }
}
solve([5,
    3,
    4,
    '*',
    '-'])