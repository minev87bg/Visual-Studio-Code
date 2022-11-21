function devideBy9(input) {
    let from = Number(input[0])
    let from2 = Number(input[0])
    let to = Number(input[1])
    let sum = 0
    for (; from2 <= to; from2++) {
        if (from2 % 9 == 0) {
            sum += from2
        }
    }
    console.log(`The sum: ${sum}`)
    for (; from <= to; from++) {
        if (from % 9 == 0) {
            console.log(from)
        }
    }
}
devideBy9([100,200])