function solve(input) {
    let key = input.shift()
    for (line of input) {
        if (line !== "Generate") {
            if (line.includes("Slice")) {
                let [start, end] = [line.split(">>>")[1], line.split(">>>")[2]]
                key = [...key]; key.splice(start, end - start); key = key.join("")
                console.log(key)
            }
            if (line.includes("Flip")) {
                let [start, end] = [line.split(">>>")[2], line.split(">>>")[3]]
                modKey = key.substring(start, end)
                if (line.includes("Upper")) { key = key.replace(modKey, modKey.toUpperCase()) }
                if (line.includes("Lower")) { key = key.replace(modKey, modKey.toLowerCase()) }
                console.log(key)
            }
            if (line.includes("Contains")) {
                let str = line.split(">>>")[1]
                if (key.includes(str)) { console.log(`${key} contains ${str}`) } else { console.log(`Substring not found!`) }
            }
        }
    }
    console.log(`Your activation key is: ${key}`)
}
solve(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])