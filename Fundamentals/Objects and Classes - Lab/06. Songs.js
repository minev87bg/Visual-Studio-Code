function solve(arr) {
    let n = arr.shift()
    let type
    let song
    let choice = arr.pop()
    for (let i = 0; i < arr.length; i++) {
        type = arr[i].split("_")[0]
        song = arr[i].split("_")[1]
        if (choice == "all") console.log(song)
        else if (choice == type) { console.log(song) }
    }
}
solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])