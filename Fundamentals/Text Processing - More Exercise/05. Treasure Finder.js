function solve(input) {
    let key = [...input.shift().split(" ")]
    let keyLength = key.length
    let newLine = []
    let decrypted = []
    for (line of input) {
        if (line == "find") { break }
        else {
            newLine = []
            for (let i = 0; i < line.length;) {
                for (let k = 0; k < keyLength; k++) {
                    let symbol = line[i]
                    if (symbol) {
                        let Newsymbol = String.fromCharCode(symbol.charCodeAt() - key[k])
                        newLine.push(Newsymbol)
                        i++
                    }
                }
            }
            decrypted.push(newLine.join(""))
        }
    }
    for (el of decrypted) {
        let lineArray = el.split("&")
        let type = lineArray[1]
        let coordinates = lineArray[2].replace("<", " ").replace(">", "").split(" ").pop()
        console.log(`Found ${type} at ${coordinates}`)
    }
}



solve(["1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"])