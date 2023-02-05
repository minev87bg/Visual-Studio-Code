function solve(arr) {
    let n = 0
    let result = []
    for (line of arr) {
        n++
        if (line == "add") { result.push(n) }
        if (line == "remove") { result.pop() }
    }
    if (result.length > 0) { return result.join("\n") } else console.log("Empty")
}
solve(['remove',
    'remove',
    'remove']
)