function solve(input) {
    let num = Number(input[0])
    for (let i = 2; i <= num; i++) {
        isPrime = true
        for (let a = 2; a < i; a++) {
            console.log(`${i} % ${a} = ${i % a}`)
            if (i % a == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) { console.log(i) }
    }
}
solve(["9"])