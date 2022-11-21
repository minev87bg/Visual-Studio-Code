function solve(arr) {
    let arr1 = [...arr]
    let arr2 = []
    while (arr1.length > 0) {
        arr2.push(Math.max(...arr1));
        arr1.splice(arr1.indexOf(Math.max(...arr1)), 1)
        if (arr1.length !== 0) {
            arr2.push(Math.min(...arr1));
            arr1.splice(arr1.indexOf(Math.min(...arr1)), 1)
        }
    }
    console.log(arr2.join(" "))
}
solve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])