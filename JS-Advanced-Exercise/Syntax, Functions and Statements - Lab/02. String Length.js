function solve(str1, str2, str3) {
    sum = str1.length + str2.length + str3.length
    aver = Math.floor(sum / 3)
    console.log(`${sum}\n${aver}`)
}
solve('chocolate', 'ice cream', 'cake')