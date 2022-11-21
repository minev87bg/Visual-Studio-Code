function solve(input) {
    let end1 = input[0].charCodeAt()
    let end2 = input[1].charCodeAt()
    if (end1 > end2) { let x = end2; end2 = end1; end1 = x }
    let string = [...input[2]]
    let sum = 0
    string.forEach(el => {
        if (el.charCodeAt() > end1 && el.charCodeAt() < end2) { sum += el.charCodeAt() }
    })
    console.log(sum)
}
solve(['a',
    '1',
    'jfe392$#@j24ui9ne#@$'])