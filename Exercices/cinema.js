function cinema(input){
    let type = input[0]
    let rows = Number(input[1])
    let col = Number(input[2])
    const movieType = {
        "Premiere": 12,
        "Normal": 7.50,
        "Discount": 5
    }
    sum = movieType[type] * rows * col
    console.log(sum.toFixed(2) + " leva")
}
cinema(["Normal",21, 13])