function deleteByEmail() {
    let input = document.getElementsByName('email')[0].value
    let result = document.querySelector('#result')
    let customers = Array.from(document.querySelectorAll('tbody tr'))
    let flag = false
    customers.forEach((el, index) => {
        if (el.outerHTML.includes(input)) {
            result.textContent = "Deleted."
            document.getElementsByTagName("tbody")[0].deleteRow(index)
            flag = true
        }
    })
    if (!flag) { result.textContent = "Not found." }
}