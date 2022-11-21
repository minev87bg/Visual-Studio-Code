function solve(str) {
    let file = str.split(String.fromCharCode(92)).pop()
    file = file.split(".")
    let ext = file.pop()
    console.log(`File name: ${file.join(".")}`)
    console.log(`File extension: ${ext}`)
}
solve('C:\\Internal\\training-internal\\Template.bak.pptx')