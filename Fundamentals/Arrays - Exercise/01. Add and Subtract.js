function add(arr) {
    let arr1 = []
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < arr.length; i++) { sum1 += arr[i] }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) { arr1.push(arr[i] + i) }
        else arr1.push(arr[i] - i)
    }
    for (let i = 0; i < arr1.length; i++) { sum2 += arr1[i] }
    console.log(arr1)
    console.log(sum1)
    console.log(sum2)
}
add([5, 15, 23, 56, 35])