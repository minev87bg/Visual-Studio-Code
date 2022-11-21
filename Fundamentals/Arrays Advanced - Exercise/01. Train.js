function solve(arr) {
    let numArr = arr[0].split(" ").map(Number)
    let maxCapacity = Number(arr[1])
    let command
    for (let i = 2; i < arr.length; i++) {
        if (arr[i].split(" ")[0] == "Add") { numArr.push(Number(arr[i].split(" ")[1])) }
        else {
            for (let a = 0; a < numArr.length; a++) {
                if (Number(arr[i]) <= maxCapacity - numArr[a]) { numArr.splice(a, 1, (numArr[a] + Number(arr[i]))); break }
            }
        }
    }
    console.log(numArr.join(" "))
}
solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])