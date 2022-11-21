function solve(arr1, arr2) {
    let workArray = arr1.slice(0, arr2[0])
    workArray.splice(0, arr2[1])
    searchNum = Number(arr2[2])
    let found = 0
    workArray.forEach(el => {
        if (el == searchNum) { found++ }
    })
    console.log(`Number ${searchNum} occurs ${found} times.`)
}
solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3])