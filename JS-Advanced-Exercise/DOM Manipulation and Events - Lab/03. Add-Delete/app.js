function addItem() {
    let inputText = document.querySelector("#newItemText").value
    let list = document.getElementById('items')
    let li = document.createElement('li')
    let btn = document.createElement('a')
    li.textContent = inputText
    btn.href = "#"
    btn.textContent = "[Delete]"
    li.appendChild(btn)
    btn.addEventListener('click', () => { li.remove() })
    list.appendChild(li)
}