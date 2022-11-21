function solve(word, str) {
    let words = word.split(", ")
    let text = str.split(" ")
    words.forEach(word => {
        text.forEach((el, i) => {
            if (el.includes("*") && el.length == word.length) { str = str.replace(el, word) }
        })
    })
    console.log(str)
}
solve('great',
    'softuni is ***** place for learning new programming languages')