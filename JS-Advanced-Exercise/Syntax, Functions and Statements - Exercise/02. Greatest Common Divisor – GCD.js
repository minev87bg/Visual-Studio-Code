function solve(num1, num2) {
    let devisors = []
    for (let i = 1; i < 10; i++) {
        if (num1 % i == 0 && num2 % i == 0) { devisors.push(i) }
    }
    console.log(Math.max(...devisors))
}
solve(15, 5)