function sumAndProduct(input) {
    // let n = Number(input[0])
    let isFound = false
    for (let x = 100; x <= 1000; x++) {
        isFound = false
        n = x
        console.log(n)
        for (let a = 1; a <= 9; a++) {
            if (isFound) { break }
            for (let b = 9; b >= a; b--) {
                if (isFound) { break }
                for (let c = 0; c <= 9; c++) {
                    if (isFound) { break }
                    for (let d = 9; d >= c; d--) {
                        sum = a + b + c + d
                        multiply = a * b * c * d
                        if (sum == multiply && n % 5 == 0) { console.log(`${a}${b}${c}${d}`); isFound = true; }
                        if (Math.floor(multiply / sum) == 3 && n % 3 == 0) { console.log(`${d}${c}${b}${a}`); isFound = true; }
                        if (isFound) { break }
                    }
                }
            }
        }
        if (!isFound) { console.log("Nothing found") }
    }
}
sumAndProduct()