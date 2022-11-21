function solve(input) {
    let students = {}
    let names = []; let grades = []; let average = []; let namesByGrade = []; averageSum = []
    for (line of input) {
        students = Object.fromEntries(line.split(', ').map(i => i.split(': ')))
        if (students['Graduated with an average score'] < 3) continue
        names.push(students['Student name'])
        grades.push(students['Grade'])
        average.push(students['Graduated with an average score'])
    }
    function studentsByGrade(grade) {
        grades.forEach((el, index) => {
            if (el == grade) {
                namesByGrade.push(names[index])
            }
        })
        return namesByGrade.join(", ")
    }
    function averageByGrade(grade) {
        grades.forEach((el, index) => {
            if (el == grade) {
                averageSum.push(average[index])
            }
        })
        return ((averageSum.map(Number).reduce((a, b) => { return (a + b) })) / averageSum.length).toFixed(2)
    }
    for (let i = Math.min(...grades); i < 12; i++) {
        if (!grades.includes(String(i))) { continue }
        namesByGrade = []
        averageSum = []
        console.log(`${i + 1} Grade`)
        console.log(`List of students: ${studentsByGrade(i)}`)
        console.log(`Average annual score from last year: ${averageByGrade(i)}`)
        console.log("")
    }
}

solve([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
])