function moving(input) {
    let space = Number(input[0]) * Number(input[1]) * Number(input[2])
    let i = 3
    let boxes = 0
    while (i <= input.length) {
        if (input[i] !== "Done") {
            boxes = Number(input[i])
            space -= boxes
            if (space <= 0) { console.log(`No more free space! You need ${Math.abs(space)} Cubic meters more.`); break }
            else { i++ }
        }
        else {console.log(`${space} Cubic meters left.`);break}
    }
}
moving(["10","10","2","20","20","20","20","122"])
moving(["10","1","2","4","6","Done"])