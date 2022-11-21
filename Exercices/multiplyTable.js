function multiplyTable(input){
    let digit = Number(input[0])
    let tableIndex = 1
    for (;tableIndex<=10;tableIndex++){
        sum = digit * tableIndex
        console.log(`${tableIndex} * ${digit} = ${sum}`)
    }
}
multiplyTable([5])