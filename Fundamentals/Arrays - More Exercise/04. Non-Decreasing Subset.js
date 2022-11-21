function solve3(arr) {
    let max = arr[0]
    let result = arr.filter(element => {
        if (element >= max) { max = element }
        return element >= max
    })
    console.log(result.join(' '))
}