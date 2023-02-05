function solve(input) {
    let emojis = input[0].match(/(\*{2}|:{2})([A-Z][a-z]{2,})\1/mg)
    let coolTreshold = input[0].match(/\d/mg).reduce((a, b) => a * b)
    let coolEmojis = []
    console.log(`Cool threshold: ${coolTreshold}`)
    if (emojis) {
        for (el of emojis) {
            let asciiSum = 0
            el.replace(/[\*\:]/g, "").split("").forEach(letter => asciiSum += letter.charCodeAt())
            if (asciiSum >= coolTreshold) { coolEmojis.push(el) }
        }
        console.log(`${emojis.length} emojis found in the text. The cool ones are:`)
        console.log(coolEmojis.join("\n"))
    }
    else console.log(`0 emojis found in the text. The cool ones are:`)
}
solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 *:Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])