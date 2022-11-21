function maxSeq(arr) {
    let s = 1
    let memory = 0
    let digit = []
    let memArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) { s++; digit.push(arr[i]) } else {
            if (s > memory) { memory = s; s = 1; digit.push(arr[i]); memArray = digit; digit = [] } else {
                s = 1; digit = []
            }
        }
        // if (i + 1 == arr.length && arr[i])
    }
    console.log(memArray.join(" "))
}
maxSeq([1, 1, 1, 2, 3, 1, 3, 3])