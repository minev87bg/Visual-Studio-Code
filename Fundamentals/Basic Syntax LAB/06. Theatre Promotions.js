function theatre(type, age) {
    let index = 3
    const dayType = {
        "Weekday": [12, 18, 12],
        "Weekend": [15, 20, 15],
        "Holiday": [5, 12, 10]
    }
    if (age >= 0 && age <= 18) { index = 0 }
    else if (age > 18 && age <= 64) { index = 1 }
    else if (age > 64 && age <= 122) { index = 2 }
    else { console.log("Error!") }
    if (index <= 2) console.log(`${dayType[type][index]}$`)
}
theatre("Weekend", 12)