function sumEvenNums(arr) {
    let sumEven = 0
    sumOdd = 0
    for (i = 0; i < arr.length; i++) {
        if (Number(arr[i]) % 2 == 0) { sumEven += Number(arr[i]) }
        else sumOdd += Number(arr[i])
    }
    console.log(sumEven - sumOdd)
}
sumEvenNums([3, 5, 7, 9])