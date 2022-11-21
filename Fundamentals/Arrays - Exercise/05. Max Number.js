function max(arr) {
    let max = 0
    let index = 0
    let outArr = []
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(...arr)
        index = arr.lastIndexOf(max)
        outArr.push(max)
        arr.fill(0, 0, index)
        arr.splice(index, 1, 0)
        i = index
        console.log(arr)
    }
    console.log(outArr.join(" "))
}
max([14, 24, 3, 19, 15, 17])