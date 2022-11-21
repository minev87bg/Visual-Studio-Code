function shopping (input) {
    let budget = Number(input[0])
    let vga = Number(input[1])
    let cpu = Number(input[2])
    let ram = Number(input[3])
    let sumvga = vga * 250
    let sumcpu = sumvga * 0.35 * cpu
    let sumram = sumvga * 0.10 * ram
    let sum = sumvga+sumcpu+sumram
    if (vga>cpu) {
        sum = sum * 0.85
    }
    if (sum>budget) {
        console.log (`Not enough money! You need ${(sum - budget).toFixed(2)} leva more!`)
    }
    if (sum<=budget) {
        console.log(`You have ${(budget - sum).toFixed(2)} leva left!`)
    }
}
shopping([920.45,3,1,1])