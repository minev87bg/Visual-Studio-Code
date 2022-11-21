function solve(word, text) {
    let notFound
    for (el of text.split(" ")) {
        if (el.toLowerCase() == word.toLowerCase()) { console.log(word); notFound = false; break }
        else notFound = true
    }
    if (notFound) console.log(`${word} not found!`)
}
solve('python',
    'JavaScript is the best programming language')