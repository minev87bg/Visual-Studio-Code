function trackingMania(input) {
    let groups = Number(input[0])
    let i = 1
    let p1 = 0
    let p2 = 0
    let p3 = 0
    let p4 = 0
    let p5 = 0
    let count = 0
    for (let a = 1; a < input.length; a++) {
        count += Number(input[a])
    }
    for (; i <= input.length; i++) {
        let qty = Number(input[i])
        if (qty <= 5) { p1 += qty }
        else if (qty >= 6 && qty <= 12) { p2 += qty }
        else if (qty >= 13 && qty <= 25) { p3 += qty }
        else if (qty >= 26 && qty <= 40) { p4 += qty }
        else if (qty >= 41) { p5 += qty }
    }
    console.log(`${(p1 / count * 100).toFixed(2)}%`)
    console.log(`${(p2 / count * 100).toFixed(2)}%`)
    console.log(`${(p3 / count * 100).toFixed(2)}%`)
    console.log(`${(p4 / count * 100).toFixed(2)}%`)
    console.log(`${(p5 / count * 100).toFixed(2)}%`)
}
trackingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])