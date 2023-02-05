function fromJSONToHTMLTable(input) {
  function escapeHTML(value) {
    return value
      .toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
  let result = []; result.push(`<table>`)

  let data = JSON.parse(input)
  let properties = Object.keys(data[0])

  result.push(`  <tr>${properties.map(prop => `<th>${escapeHTML(prop)}</th>`).join("")}</tr>`)
  data.forEach(entry => { result.push(`  <tr>${properties.map(prop => `<td>${escapeHTML(entry[prop])}</td>`).join("")}</tr>`) })

  result.push(`</table>`)
  return (result.join("\n"))
}
fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angprop",
"Score":5.50,
" Grade":10}]`);