function solve(input) {
    let words = input.shift().split(" ")
    let map = new Map()
    words.forEach(el => { map.set(el, 0) })
    input.forEach(el => { if (words.includes(el)) { map.set(el, map.get(el) + 1) } })
    let sorted = Array.from(map).sort((a, b) => b[1] - a[1])
    for ([key, value] of sorted) { console.log(`${key} - ${value}`) }
}
solve([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])