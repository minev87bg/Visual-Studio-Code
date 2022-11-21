function solve(str, word) {
    let counter = 0
    let result = str.split(" ").forEach(el => {
        if (el == word) counter++
    })
    console.log(counter)
}
solve('This is a word and it also is a sentence', 'is')