function cake(input) {
    let pieces = Number(input[0]) * Number(input[1])
    let i = 2
    let guests = 0
    while (i <= input.length) {
        if (input[i] !== "STOP") {
            guests = Number(input[i])
            pieces -= guests
            if (pieces <= 0) { console.log(`No more cake left! You need ${Math.abs(pieces)} pieces more.`); break }
            else { i++ }
        }
        else { console.log(`${pieces} pieces are left.`); break }
    }
}
cake(["10", "10", "20", "20", "20", "20", "21"])
cake(["10","2","2","4","6","STOP"])