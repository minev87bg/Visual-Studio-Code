function examPrep(input) {
    let breakTime = Number(input[0])
    let i = 1
    let badMarks = 0
    let scoreSum = 0
    let cases = 0
    let caseName
    let caseMark
    while (i <= input.length) {
        if (input[i] != "Enough" && badMarks != breakTime) {
            caseName = input[i]
            caseMark = Number(input[i + 1])
            if (caseMark <= 4) { badMarks++; cases++; i += 2; scoreSum += caseMark }
            else { scoreSum += caseMark; cases++; i += 2 }
        }
        if (badMarks == breakTime) {
            console.log(`You need a break, ${badMarks} poor grades.`)
            break
        }
        else if (input[i] == "Enough") {
            console.log(`Average score: ${(scoreSum / cases).toFixed(2)}`)
            console.log(`Number of problems: ${cases}`)
            console.log(`Last problem: ${caseName}`)
            break
        }
    }
}
examPrep(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"])