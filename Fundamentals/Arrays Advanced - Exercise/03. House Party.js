function solve(arr) {
    let goingList = []
    let name
    let goingStatus = ""
    for (let i = 0; i < arr.length; i++) {
        name = arr[i].split(" ")[0]
        if (arr[i].includes("not")) { goingStatus = "false" } else { goingStatus = "true" }
        if (goingList.includes(name) && goingStatus == "true") { console.log(`${name} is already in the list!`) }
        else if (goingList.includes(name) && goingStatus == "false") { goingList.splice(goingList.indexOf(name), 1) }
        else if (!goingList.includes(name) && goingStatus == "true") { goingList.push(name) }
        else if (!goingList.includes(name) && goingStatus == "false") { console.log(`${name} is not in the list!`) }
    }
    console.log(goingList.join("\n"))
}
solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])