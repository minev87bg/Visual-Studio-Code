function reversInPlace(arr) {
    let output = ""
    arr.reverse()
    for (i = 0; i < arr.length; i++) {
        output += `${arr[i]} `
    }
    console.log(output)
}
reversInPlace(['a', 'b', 'c', 'd', 'e'])