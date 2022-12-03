function solve(input) {
    let key = input.shift()
    let pattern = /(?<name>\@[A-Za-z]+)[^@\-!:>]+(?<flag>\![GN]\!)/g
    for (line of input) {
        let word = ""
        if (line !== "end") {
            for (el of line) { word += (String.fromCharCode(el.charCodeAt() - key)) }
        }
        while ((validCode = pattern.exec(word)) != null) {
            let name = validCode.groups["name"].replace("@", "")
            let flag = validCode.groups["flag"].replace(/\!/g, "")
            if (flag == "G") { console.log(name) }
        }
    }
}
solve(['3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejnW$J$',
    'CVwdq&gnmjkvng$Q$',
    'end'])