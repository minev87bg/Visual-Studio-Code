function rounding(x, y) {
    if (y > 15) { y = 15 }
    console.log(parseFloat(x.toFixed(y)))
}
rounding(10.5, 5)