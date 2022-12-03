function solve(input) {
    let strings = input[0].match(/\D+\d+/ig)
    let stringSet = new Set()
    let result = ""
    for (line of strings) {
        let str = line.match(/\D/gi)
        let repeat = Number(line.match(/\d+/).join(""))
        if (repeat != 0) {
            str.forEach(el => stringSet.add(el.toLowerCase()))
            result += str.join("").toUpperCase().repeat(repeat)
        }
    }
    console.log(`Unique symbols used: ${stringSet.size}`)
    console.log(result)
}
solve(["aSd2&5s@1{}6"])