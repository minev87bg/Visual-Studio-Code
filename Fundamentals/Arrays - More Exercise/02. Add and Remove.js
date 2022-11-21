function addRemove(arr) {
    let newArr = []
    let num = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "add") { num++; newArr.push(num) }
        if (arr[i] == "remove") { num++; newArr.pop() }
    }
    if (newArr.length != 0) { console.log(newArr.join(" ")) } else console.log("Empty")
}
addRemove(['add', 'add', 'add'])