function oddN(n) {
    let sum = 0
    let i = 0
    let m = 1
    while (i != n) {
        if (m % 2 != 0) { console.log(m); sum += m; i++ }
        m++
    }
    if (sum != 0) {
        console.log(`Sum: ${sum}`)
    }
}
oddN(3)