function sumOf2Numbers(input) {
    let min = Number(input[0])
    let max = Number(input[1])
    let magicN = Number(input[2])
    let isFound = false
    combinations = 0
    for (let x = min; x <= max; x++) {
        for (let y = min; y <= max; y++) {
            combinations++
            sum = x + y
            if (sum == magicN) {
                console.log(`Combination N:${combinations} (${x} + ${y} = ${sum})`)
                isFound = true
                break
            }
        }
        if (sum == magicN) { isFound = true; break }
    }
    if (!isFound) { console.log(`${combinations} combinations - neither equals ${magicN}`) }
}
sumOf2Numbers(["88", "888", "2000"])