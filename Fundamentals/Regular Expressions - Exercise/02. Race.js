function solve(input) {
    let racers = []
    input[0].split(", ").forEach(name => racers[name] = { points: 0 })
    i = 1
    let line = input[i]
    while (line != "end of race") {
        let digits = []; let letters = []
        digitPattern = /\d/g
        letterPattern = /[A-Z]+/gi
        letters.push(line.match(letterPattern))
        digits.push(line.match(digitPattern))
        currentScore = digits.flat().map(Number).reduce((a, b) => { return a + b })
        currentRacer = letters.flat().join("")
        if (racers.hasOwnProperty(currentRacer)) {
            racers[currentRacer] = { points: racers[currentRacer].points + currentScore }
        }
        i++; line = input[i]
    }
    sorted = Object.keys(racers).sort((a, b) => racers[b].points - racers[a].points)
    sorted.forEach((name, index) => {
        switch (index) {
            case 0: { console.log(`1st place: ${name}`) } break
            case 1: { console.log(`2nd place: ${name}`) } break
            case 2: { console.log(`3rd place: ${name}`) } break
        }
    })
}
solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])