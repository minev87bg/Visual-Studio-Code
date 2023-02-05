function solve() {
  const textArea = document.getElementById('input').value
  let output = document.getElementById('output')
  let sentences = textArea.split(".").filter((s) => s.length > 0)
  let counter = 0; let paragraph = []; let threeSentences = []

  for (one of sentences) {
    threeSentences.push(one); counter++
    if (counter == 3) {
      paragraph.push(`<p>${threeSentences.join(". ")}.</p>`)
      threeSentences = []; counter = 0
    }
  }
  output.innerHTML = paragraph.join("")
  if (threeSentences.length > 0) {
    let p = document.createElement('p')
    p.textContent = threeSentences.join(". ") + "."
    output.appendChild(p)
  }
}