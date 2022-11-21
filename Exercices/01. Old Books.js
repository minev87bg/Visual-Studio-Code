function oldBooks(input) {
    let favBook = input[0]
    let i = 1
    while (i <= input.length) {
        let nextBook = input[i]
        if (nextBook === favBook) { console.log(`You checked ${i - 1} books and found it.`); break }
        else if (nextBook == "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${i - 1} books.`)
            break
        }
        else { i++ }
    }
}
oldBooks(["Troy", "Stronger", "Life Style", "The Spot", "No More Books"])