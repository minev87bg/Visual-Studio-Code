function create(words) {
   let parent = document.getElementById('content')
   for (let word of words) {
      let p = document.createElement("p")
      let div = document.createElement('div')
      p.textContent = word
      p.style.display = "none"
      div.appendChild(p)
      div.addEventListener('click', (event) => {
         event.target.querySelector("p").style.display = "block"
      })
      parent.appendChild(div)
   }
}