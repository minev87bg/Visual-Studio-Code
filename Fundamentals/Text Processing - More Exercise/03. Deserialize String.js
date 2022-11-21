function solve(input) {
    let allIndexes = []
    for (line of input) {
        if (line != "end") {
            let el = line.split(":")[0]
            let indexOfEl = line.split(":")[1].split("/")
            allIndexes.push(...indexOfEl.flat())
        }
    }
    let word = Array(Math.max(...allIndexes)).fill(0)
    for (line of input) {
        if (line != "end") {
            let el = line.split(":")[0]
            let indexOfEl = line.split(":")[1].split("/")
            indexOfEl.forEach(i => {
                if (i > word.length - 1) { word.splice(i, 0, el); word.splice(i, 1, el) }
                else { word.splice(i, 1, el) }
            })
        }
    }
    console.log(word.join(""))
}
solve(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end'])