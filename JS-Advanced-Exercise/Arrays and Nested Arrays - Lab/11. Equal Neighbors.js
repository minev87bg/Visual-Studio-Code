function solve(arr) {
    let currentElement
    let nextElement
    let bottomElement
    let pair = 0
    for (let col = 0; col < arr[0].length; col++) {
        for (let line = 0; line < arr.length; line++) {
            currentElement = arr[line][col]
            if (arr[line].lenght != col + 1) {
                nextElement = arr[line][col + 1]
                if (currentElement == nextElement) { pair++ }
            }
            if (line + 1 != arr.length) {
                bottomElement = arr[line + 1][col]
                if (currentElement == bottomElement) {
                    pair++
                }
            }
        }
    }
    return (pair)
}
solve([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2'],
])
// arr[line].splice(arr[line].indexOf(currentElement), 1)