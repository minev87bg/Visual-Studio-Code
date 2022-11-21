function solve(arr) {
    arr.sort(Intl.Collator().compare).sort((a, b) => { return a.length - b.length })
    console.log(arr.join("\n"))
}
solve(["test", "Deny", "omen", "Default"])
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
