function solve(str) {
    let special
    str.split(" ").forEach(el => {
        if (el.includes("#") && el != "#") {
            let word = [...el]; word.shift()
            for (symbol of word) {
                if (symbol.toLowerCase().charCodeAt() < 97 || symbol.toLowerCase().charCodeAt() > 122) { special = false; break }
                else special = true
            }
            if (special) { console.log(word.join("")) }
        }
    })
}
solve('Nowadays everyone uses # to tag a #special word in #s0cialMedia')