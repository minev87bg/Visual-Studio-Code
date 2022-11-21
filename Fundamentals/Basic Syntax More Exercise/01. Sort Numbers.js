function sort(x, y, z) {
    const array = [x, y, z]
    sortedArray = array.sort()
    for (let i = sortedArray.length - 1; i >= 0; i--)
        console.log(sortedArray[i])
}
sort(3, 1, 2)