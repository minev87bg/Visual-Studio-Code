function messageTranslator(input) {
    let countOfStrings = input.shift();
    let pattern = /([\!])(?<command>[A-Za-z]{3,})\1:([\[])(?<string>[A-Za-z]{8,})([\]])/gm;
    for (line of input) {
        while ((validLine = pattern.exec(line))) {
            let command = validLine.groups["command"]
            let string = validLine.groups["string"]
            let result = []
            string.split("").forEach(letter => { result.push(letter.charCodeAt()) })
            console.log(`${command}:${result.join(" ")}`)
        }
        if (!line.match(pattern)) { console.log("The message is invalid") }
    }
}
messageTranslator([
    "2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"]);