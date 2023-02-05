function solve() {
    let button = document.getElementsByTagName("button")
    let textArea = document.getElementsByTagName("textarea")[0]
    let list = new Map()
    Array.from(button).forEach(b => {
        b.addEventListener("click", (event) => {
            if (event.target.className === "add-product") {
                let item = event.target.parentElement
                let price = item.nextElementSibling.textContent
                let name = item.previousElementSibling.children[0].textContent
                if (!list.has(name)) { list.set(name, 0) }
                list.set(name, list.get(name) + Number(price))
                textArea.value += `Added ${name} for ${price} to the cart.\n`
            } else {
                let totalPrice = Number(Array.from(list.values()).reduce((a, b) => +a + +b, 0))
                textArea.value += `You bought ${Array.from(list.keys()).join(', ')} for ${totalPrice.toFixed(2)}.`
                let buttons = Array.from(document.querySelectorAll('button'));
                buttons.forEach(button => button.disabled = true);
            }
        })
    })
}