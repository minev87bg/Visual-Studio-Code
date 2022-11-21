function solve(input) {
    let UpperSum = 0
    let LowerSum = 0
    function isLetter(x) { if (x.toLowerCase().charCodeAt() < 123 && x.toLowerCase().charCodeAt() > 96) { return true } }
    function isUpperCase(x) { if (x.toUpperCase() == x) { return true } }
    function isLowerCase(x) { if (x.toLowerCase() == x) { return true } }
    let text = [...input[0]]
    let checkCase = input[1]
    for (el of text) {
        if (isLetter(el)) {
            if (isUpperCase(el)) { UpperSum += el.charCodeAt() }
            if (isLowerCase(el)) { LowerSum += el.charCodeAt() }
        }
    }
    if (checkCase == "LOWERCASE") { console.log(`The total sum is: ${LowerSum}`) }
    if (checkCase == "UPPERCASE") { console.log(`The total sum is: ${UpperSum}`) }
}
solve(['AC/DC',
    'UPPERCASE'])