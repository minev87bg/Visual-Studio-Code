function minNum(input) {
    let a = 0
    min = input[0]
    while (a <= input.length) {
        if (input[a] != "Stop") {
            if (Number(input[a]) <= min) { min = Number(input[a]); a++ } else { a++ }
        }
        else { console.log(min); break }
    }
}
minNum(["-100", "-99", "-180", "-70", "Stop"])