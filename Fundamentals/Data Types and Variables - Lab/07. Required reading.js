function reading(pages, speed, days) {
    let totalHours = days * 24
    let pagesPerDay = pages / days
    let hoursPerDay = pagesPerDay / speed
    console.log(hoursPerDay)
}
reading(432,
    15,
    4)