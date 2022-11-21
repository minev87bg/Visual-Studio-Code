function print(arr) {
    let n = Number(arr[arr.length - 1])
    let newArr = []
    for (let i = 0; i < arr.length - 1; i += n) {
        newArr.push(arr[i])
    }
    console.log(newArr.join(" "))
}
print(['5', '20', '31', '4', '20', '2'])