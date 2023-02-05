function solve(input) {
    let newArr = []
    input.forEach((el, i) => {
        if (i % 2 == 0) { newArr.push(el) }
    })
    console.log(newArr.join(" "))
}
solve(['20', '30', '40', '50', '60'])