function solve(input) {
    let string = input[0]
    let pattern = input[1]
    let strike1; let strike2
    while (string.indexOf(pattern) > -1 && string.lastIndexOf(pattern) > -1) {
        if (pattern.length == 0) { break }
        let revString = [...string].reverse().join("")
        let revPattern = [...pattern].reverse().join("")
        if (revString.includes(revPattern)) { revString = revString.replace(revPattern, ""); strike1 = true }
        else { strike1 = false }
        string = [...revString].reverse().join("")
        if (string.includes(pattern)) { string = string.replace(pattern, ""); strike2 = true }
        else { strike2 = false }
        if (strike1 && strike2) {
            pattern = [...pattern]
            pattern.splice(Math.floor(pattern.length / 2), 1)
            pattern = pattern.join("")
            console.log("Shaked it.")
        }
        if (!string.includes(pattern)) { break }
    }
    console.log("No shake.")
    console.log(string)
}
solve(['##mtm!!mm.mm*mtm.#',
    'mtm'])