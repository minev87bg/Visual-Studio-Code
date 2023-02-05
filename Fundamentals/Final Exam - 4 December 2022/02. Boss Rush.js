function solve(input) {
    let num = input.shift()
    let pattern = /\|(?<name>[A-Z]+)\|\:\#(?<title>[A-z]+\s[A-z]+)\#/gm
    for (line of input) {
        while ((validLine = pattern.exec(line))) {
            let name = validLine.groups["name"]
            let title = validLine.groups["title"]
            console.log(`${name}, The ${title}`)
            let strength = `>> Strength: ${name.length}`
            let armor = `>> Armor: ${title.length}`
            console.log(`${strength}\n${armor}`)
        }
        if (!line.match(pattern)) console.log("Access denied!")
    }
}
solve(['3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#'])