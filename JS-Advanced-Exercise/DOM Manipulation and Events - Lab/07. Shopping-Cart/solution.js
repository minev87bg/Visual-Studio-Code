function solve() {
   let totalPrice = 0
   let list = []
   let products = Array.from(document.getElementsByClassName("product"))
   let cart = document.getElementsByTagName('textarea')[0]
   let checkout = document.getElementsByClassName('checkout')[0]

   for (let item of products) {
      let name = Array.from(item.getElementsByClassName('product-title'))
      let price = Number(Array.from(item.getElementsByClassName('product-line-price'))[0].textContent)
      let addBtn = item.getElementsByClassName('add-product')

      addBtn[0].addEventListener('click', () => {
         cart.value += `Added ${name[0].textContent} for ${price.toFixed(2)} to the cart.\n`
         totalPrice += Number(price)
         if (!list.includes(name)) { list.push(name[0].textContent) }
      })
   }
   checkout.addEventListener('click', () => {
      cart.value += `You bought ${list.join(", ")} for ${totalPrice.toFixed(2)}.`
      let buttons = Array.from(document.getElementsByTagName("button")).forEach(btn => { btn.disabled = true })
   })
}