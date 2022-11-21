function sumEvenNums(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        if (Number(arr[i]) % 2 == 0) { sum += Number(arr[i]) }
    }
    console.log(sum)
}
sumEvenNums(['2', '4', '6', '8', '10'])