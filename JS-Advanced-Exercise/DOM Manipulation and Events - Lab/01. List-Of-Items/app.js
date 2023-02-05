function addItem() {
    let list = document.querySelector('#items')
    let newItemText = document.querySelector('#newItemText').value
    let li = document.createElement('li')
    li.textContent = newItemText
    list.appendChild(li)

}