function solve(input) {
    let codes = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14, S: 4, H: 3, D: 2, C: 1 }
    let map = {}
    let results = new Map()
    for (el of input) {
        [person, cards] = el.split(": ")
        map[person] = []
    }
    for (el of input) {
        [person, cards] = el.split(": ")
        cards = cards.split(", ")
        cards.forEach(x => { if (!map[person].includes(x)) { map[person].push(x) } })
    }

    for (key in map) {
        let sum = 0
        map[key].forEach(el => {
            codeArr = el.split("")
            if (codeArr.length == 3) { a = 10; b = codeArr[2] } else { [a, b] = [codeArr[0], codeArr[1]] }
            sum += codes[a] * codes[b]
        })
        console.log(`${key}: ${sum}`)

    }
}
solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])