function nextDay(year, month, day) {
    var today = new Date(year, month - 1, day + 1)
    output = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    console.log(output)
}
nextDay(2020, 3, 24)