function equalArr(arr1, arr2) {
    let identical = true
    sum = 0
    for (let i = 0; i < arr1.length; i++) {
        if (Number(arr1[i]) == Number(arr2[i])) { sum += Number(arr1[i]) }
        else { identical = false; console.log(`Arrays are not identical. Found difference at ${i} index`); break }
    }
    if (identical) console.log(`Arrays are identical. Sum: ${sum}`)
}
equalArr(['1'], ['10'])