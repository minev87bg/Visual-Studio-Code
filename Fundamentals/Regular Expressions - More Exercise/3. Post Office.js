function solve(input) {
    let line1 = input[0].split("|")[0]
    let line2 = input[0].split("|")[1]
    let line3 = input[0].split("|")[2]
    let initials = (/([#$%*&])[A-Z]+\1/g).exec(line1)[0].replace(/[#$%*&]/g, "")
    let matches = line2.match(/(\d+):((0[1-9])|[1-9]\d)/g)
    let words = line3.split(" ")
    let usedChars = []
    for (letter of initials) {
        for (let match of matches) {
            let char = String.fromCharCode(match.split(":")[0])
            let length = Number(match.split(":")[1]) + 1
            if (char == letter && !usedChars.includes(char)) {
                usedChars.push(char)
                for (let word of words) {
                    if (word[0] == char && word.length == length) { console.log(word) }
                }
            }
        }
    }
}
solve(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'])