function solve(input) {
    let judges = Number(input[0])
    let i = 1
    let presentationCount = 0
    let totalMarkSum = 0
    while (input[i] != "Finish") {
        let presentationName = input[i]
        let n = i + judges
        let markSum = 0
        while (i < n) {
            i++
            markSum += Number(input[i])
        }
        i++
        markAverage = markSum / judges
        totalMarkSum += markAverage
        presentationCount++
        console.log(`${presentationName} - ${markAverage.toFixed(2)}.`)
    }
    console.log(`Student's final assessment is ${(totalMarkSum / presentationCount).toFixed(2)}.`)
}
solve(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"])
