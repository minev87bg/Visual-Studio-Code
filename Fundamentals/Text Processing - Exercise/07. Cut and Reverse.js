function solve(str) {
    str2 = [...str]
    str1 = str2.splice(0, str.length / 2)
    console.log(str1.reverse().join(""))
    console.log(str2.reverse().join(""))
}
solve('tluciffiDsIsihTgnizamAoSsIsihT')