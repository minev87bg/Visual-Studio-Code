function solve() {
    const textArea = document.getElementById('input').value
    let sentences = textArea.split(".").filter((s) => s.length > 1)
    let counter = 0; let paragraph = []; let tempArray = []
    for (one of sentences) {
        tempArray.push(one); counter++
        if (counter == 3 || sentences.indexOf(one) == sentences.length - 1) {
            paragraph.push(`<p>${tempArray.join(".")}.</p>`)
            tempArray = []; counter = 0
        }
    }
    document.getElementById('output').innerHTML = paragraph.join("")
}