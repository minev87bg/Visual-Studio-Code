function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const rows = document.querySelectorAll('table tbody tr')

   function onClick() {
      let searchText = document.getElementById('searchField').value
      for (line of rows) {
         if (line.innerText.includes(searchText) && searchText != "") {
            console.log(true)
            line.classList.add('select')
         }
         else line.classList.remove('select')
      }
   }
}