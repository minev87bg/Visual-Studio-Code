function rightPlace(string1, char, string2) {
    newString = string1.replace("_", char)
    if (newString == string2) console.log(`Matched`)
    else console.log(`Not Matched`)
}
rightPlace('Str_ng', 'o', 'Strong')