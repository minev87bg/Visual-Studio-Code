function triangle(a, b, c) {
    let s = (a + b + c) / 2
    let A = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    console.log(A)
}
triangle(2,
    3.5,
    4)