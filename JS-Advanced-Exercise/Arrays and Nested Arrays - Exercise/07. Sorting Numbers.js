function solve(arr) {
    let arr1 = [...arr]
    let arr2 = []
    while (arr1.length > 0) {
        if (arr1.length !== 0) {
            arr2.push(Math.min(...arr1));
            arr1.splice(arr1.indexOf(Math.min(...arr1)), 1)
        }
        if (arr1.length !== 0) {
            arr2.push(Math.max(...arr1));
            arr1.splice(arr1.indexOf(Math.max(...arr1)), 1)
        }
    }
    return (arr2)
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])