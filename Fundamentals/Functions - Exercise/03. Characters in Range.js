function solve(a, b) {
    let arr = []
    let start
    let stop
    if (a.charCodeAt() < b.charCodeAt()) { start = a.charCodeAt() + 1; stop = b.charCodeAt() - 1 }
    else { start = b.charCodeAt() + 1; stop = a.charCodeAt() - 1 }
    for (; start <= stop; start++) { arr.push(String.fromCharCode(start)) }
    console.log(arr.join(" "))
}
solve('a',
    'd')