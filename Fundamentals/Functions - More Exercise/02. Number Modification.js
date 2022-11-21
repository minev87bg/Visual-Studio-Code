function solve(num) {
    let sum = 0
    let arr = [...num.toString()]
    for (let i = 0; i < arr.length; i++) {
        sum = 0
        for (let a = 0; a < arr.length; a++) {
            sum += Number(arr[a])
        }
        if (sum / arr.length < 5) { arr.push(9) } else { console.log(arr.join("")); break }
    }
}
solve(101)