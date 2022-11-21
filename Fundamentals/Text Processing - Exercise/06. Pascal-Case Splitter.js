function solve(str) {
    let text = [...str]
    let words = []
    let word = ""; i = 0
    for (el of text) {
        if (el.toUpperCase() == el) {
            words.push(word); word = ""; word += el;
        }
        else { word += el }
        if (i == text.length - 1) { words.push(word) }
        i++
    }
    words.shift()
    console.log(words.join(", "))
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')