function prime(n) {
    let isPrime
    for (let i = 2; i < n; i++) {
        if (n % i == 0) { isPrime = false; break } else isPrime = true
    }
    console.log(isPrime)
}
prime(81)