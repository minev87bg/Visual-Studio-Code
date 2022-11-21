function combo(input) {
    let n = Number(input[0])
    let sum = 0
    let valid = 0
    for (let x = 0; x <= n; x++) {
        for (let y = 0; y <= n; y++) {
            for (let z = 0; z <= n; z++) {
                sum = x + y + z
                if (sum == n) { valid++ }
            }
        }
    }
    console.log(valid)
}
combo(["5"])