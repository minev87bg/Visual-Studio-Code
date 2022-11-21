function leapYear(year) {
    let leap
    if ((year % 400 == 0 && year % 4 == 0) || (year % 4 == 0 && year % 100 != 0 && year % 400 != 0)) { leap = true } else leap = false
    if (leap) { console.log(`yes`) } else console.log(`no`)
}
leapYear(4)