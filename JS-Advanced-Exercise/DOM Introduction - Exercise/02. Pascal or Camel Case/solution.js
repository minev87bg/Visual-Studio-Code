function solve() {

  const input = document.getElementById("text").value.split(" ") || []
  const convention = document.getElementById('naming-convention').value
  let result = []

  for (el of input) { result.push(toPascal(el)) }

  function toPascal(word) { word = [...word.toLowerCase()]; word.splice(0, 1, word[0].toUpperCase()); return word.join("") }
  function toCamel(word) { word = word.toLowerCase(); return word }

  if (convention == "Camel Case") {
    result.splice(0, 1, toCamel(result[0]))
    result = result.join("")
  }
  else if (convention == "Pascal Case") { result = result.join("") }
  else result = "Error!"

  document.getElementById('result').textContent = result
}
