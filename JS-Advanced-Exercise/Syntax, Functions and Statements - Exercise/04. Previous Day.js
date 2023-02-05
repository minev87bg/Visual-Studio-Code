function solve(year, month, day) {
    if (year != 0 && month != 0 && day != 0) {
        let date = new Date(year, month - 1, day - 1)
        let yr = date.getFullYear()
        let mn = date.getMonth()
        let d = date.getDate()
        console.log(`${yr}-${mn + 1}-${d}`)
    }
}
solve(2016, 1, 1)