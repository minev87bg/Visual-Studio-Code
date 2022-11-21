function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        let numString = arr[i].toString()
        for (let a = 0, z = numString.length - 1; a < numString.length / 2; z--, a++) {
            let digitStart = Number(numString[a])
            let digitStop = Number(numString[z])
            if (digitStart != digitStop) { flag = "false"; break } else flag = "true"
        }
        console.log(flag)
    }
}
solve([123, 323, 421, 121])