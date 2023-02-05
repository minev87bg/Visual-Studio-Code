function solve(arr) {
    let output = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) { output.unshift(arr[i]) } else { output.push(arr[i]) }
    }
    return (output.join(`\n`))
}
solve(['3', '-2', '0', '-1'])