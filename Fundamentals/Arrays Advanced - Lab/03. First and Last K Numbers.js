function solve(arr) {
    console.log(arr.slice(1, Number(arr[0]) + 1).join(" "))
    console.log(arr.slice(arr.length - Number(arr[0]), arr.length).join(" "))
}
solve([3,
    6, 7, 8, 9])