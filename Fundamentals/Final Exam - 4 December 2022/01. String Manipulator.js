function solve(input) {
    let string = input.shift()
    for (line of input) {
        if (line.includes("Translate")) {
            let [command, replace1, replace2] = line.split(" ")
            let regex = new RegExp(replace1, "g")
            string = string.replace(regex, replace2)
            console.log(string)
        }
        if (line.includes("Includes")) {
            let [command, searchString] = line.split(" ")
            if (string.includes(searchString)) { console.log("True") } else console.log("False")
        }
        if (line.includes("Start")) {
            let [command, startString] = line.split(" ")
            if (string.indexOf(startString) == 0) { console.log("True") } else console.log("False")
        }
        if (line.includes("Lowercase")) { string = string.toLowerCase(); console.log(string) }
        if (line.includes("FindIndex")) { let [command, char] = line.split(" "); console.log(string.lastIndexOf(char)) }
        if (line.includes("Remove")) {
            let [command, start, end] = line.split(" ")
            string = [...string]; string.splice(start, end); string = string.join("")
            console.log(string)
        }
    }
}
solve(["*S0ftUni is the B3St Plac3**",
    "Translate 2 o",
    "Includes best",
    "Start the",
    "Lowercase",
    "FindIndex p",
    "Remove 2 7",
    "End"])