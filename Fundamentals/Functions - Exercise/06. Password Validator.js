function solve(string) {
    let isSixToTen = ""
    let lettersOnly = ""
    let notAllowed = "false"
    if (string.length >= 6 && string.length <= 10) { isSixToTen = "true" } else { isSixToTen = "false" }
    let numCount = 0
    strArray = [...string]
    for (let i = 0; i < strArray.length; i++) {
        if ((strArray[i].charCodeAt() >= 97 && strArray[i].charCodeAt() <= 122)
            ||
            (strArray[i].charCodeAt() >= 65 && strArray[i].charCodeAt() <= 90)
            ||
            strArray[i].charCodeAt() >= 48 && strArray[i].charCodeAt() <= 57) { notAllowed = "false" }
        else { notAllowed = "true"; break }
    }
    strArray.forEach(element => {
        if (element.charCodeAt() >= 48 && element.charCodeAt() <= 57) { numCount++ }
    })
    if (isSixToTen == "false") console.log("Password must be between 6 and 10 characters")
    if (notAllowed == "true") console.log("Password must consist only of letters and digits")
    if (numCount < 2) console.log("Password must have at least 2 digits")
    if (isSixToTen == "true" && notAllowed == "false" && numCount > 1) { console.log("Password is valid") }
}
// solve('logIn')
solve('logIn234')
// solve('l+')