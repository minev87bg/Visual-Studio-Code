function solve(num) {
    num = num.toString()
    let flag = false
    for (el of num) {
        if (el != num[0]) { flag = false; break }
        else flag = true
    }
    sum = [...num].map(Number).reduce((a, b) => a + b)
    if (flag) { console.log(flag); console.log(sum) }
    else { console.log(flag); console.log(sum) }
}
solve(222222)