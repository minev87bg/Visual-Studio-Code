function maxNum(input) {
    let a = 0
    max = input[0]
    while (a <= input.length) {
        if (input[a] != "Stop") {
            if (Number(input[a]) >= max) { max = Number(input[a]); a++ } else { a++ }
        }
        else { console.log(max); break }
    }
}
maxNum(["-100", "-99", "-180", "-70", "Stop"])