function primeOrNot(input) {
    let primeNum = 0
    let nonPrimeNum = 0
    let negative = false
    for (let i = 0; i <= input.length; i++) {
        if (input[i] == "stop") break
        else {
            let num = Number(input[i])
            isPrime = true
            if (num < 0) { console.log("Number is negative."); continue };
            for (let n = 2; n < num; n++) {
                if (num % n == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) { primeNum += num } else { nonPrimeNum += num }
        }
    }
    console.log(`Sum of all prime numbers is: ${primeNum}`)
    console.log(`Sum of all non prime numbers is: ${nonPrimeNum}`)
}
primeOrNot(["4","9","5","stop"])