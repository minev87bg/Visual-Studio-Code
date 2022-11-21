function solve(arr) {
    let checkSum = 0
    let flag
    for (i = 0; i < arr.length; i++) {
        sum = 0
        colSum = 0
        for (a = 0; a < arr[i].length; a++) {
            sum += arr[i][a]
            checkSum += arr[0][a]
        }
        for (b = 0; b < arr.length; b++) {
            colSum += arr[b][i]
        }
        if (checkSum != sum || checkSum != colSum) { flag = "false"; break }
        else { flag = "true"; checkSum = 0 }
    }
    console.log(flag)
}
solve([[4, 5, 6, 6],
[6, 5, 4, 6],
[5, 5, 5, 6]])