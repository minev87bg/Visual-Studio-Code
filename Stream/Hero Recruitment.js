function solve(input) {
    let heroes = []
    for (line of input) {
        if (line != "End") {
            let [command, name, spell] = line.split(" ")
            if (command == "Enroll") {
                if (!heroes[name]) { heroes[name] = [] }
                else { console.log(`${name} is already enrolled.`) }
            }
            if (command == "Learn") {
                if (heroes[name]) {
                    if (!heroes[name].includes(spell)) { heroes[name].push(spell) }
                    else { console.log(`${name} has already learnt ${spell}`) }
                }
                else { console.log(`${name} doesn't exist.`) }
            }
            if (command == "Unlearn") {
                if (heroes[name]) {
                    let spellIndex = heroes[name].indexOf(spell)
                    if (heroes[name].includes(spell)) { heroes[name].splice(spellIndex, 1) }
                } else { console.log(`${name} doesn't exist.`) }
            }
        }
        else break
    }
    console.table(heroes)
    //Object.values(heroes).forEach(spells => { console.log(spells) })
}
solve(["Enroll Stefan",
    "Enroll Peter",
    "Enroll Stefan",
    "Learn Peter spell0",
    "Learn Peter spell1",
    "Learn Stefan spell2",
    "Learn Stefan spell3",
    "Learn John ItshouldNotWork",
    "Unlearn George Dispel",
    "Unlearn Stefan spell2",
    "End"])