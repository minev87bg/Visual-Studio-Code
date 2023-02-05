function search() {
   let counter = 0
   document.getElementById('result').textContent = ``
   let items = Array.from(document.querySelectorAll('#towns li'))
   let search = document.getElementById('searchText').value

   for (element of items) {
      let town = element.innerHTML
      if (town.includes(search) && search != "") {
         element.style = "font-weight: bold;text-decoration: underline;"
         counter++
      }
      else element.style = "font-weight: normal;text-decoration: none;"
   }
   if (counter > 0) document.getElementById('result').textContent = `${counter} matches found`
   else document.getElementById('result').textContent = ""
}
