function solve(input) {
    let schedule = {}
    let newObj = {}
    for (el of input) {
        let [day, name] = el.split(" ")
        if (!schedule.hasOwnProperty(day)) { schedule[day] = name; console.log(`Scheduled for ${day}`) }
        else { console.log(`Conflict on ${day}!`) }
    }
    for (key in schedule) { console.log(`${key} -> ${schedule[key]}`) }
}
solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])