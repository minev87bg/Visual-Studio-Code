function solve(str) {
    let result = []
    let a = ""
    for (el of [...str]) {
        if (el == a) { continue } else { a = el; result.push(a) }
    }
    console.log(result.join(""))
}
solve('aaaaabbbbbcdddeeeedssaa')