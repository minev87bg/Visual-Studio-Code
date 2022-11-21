function grad(input) {
    let name = input[0]
    let grade = 1
    let markSum = 0
    let warn = 0
    while (grade <= 12) {
        if (Number(input[grade]) >= 4) { markSum += Number(input[grade]); grade++ }
        else { warn++ }
        if (warn > 1) { console.log(`${name} has been excluded at ${grade} grade`); break }
        if (warn < 2 && grade == 13) { console.log(`${name} graduated. Average grade: ${(markSum / 12).toFixed(2)}`) }
    }
}
grad(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "2","3"])