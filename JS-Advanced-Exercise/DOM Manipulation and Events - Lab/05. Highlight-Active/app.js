function focused() {
    let input = Array.from(document.querySelectorAll('input'))
    console.log(input)
    input.forEach(el => {
        el.addEventListener('focus', () => { el.parentNode.className = 'focused' })
        el.addEventListener('blur', () => { el.parentNode.className = '' })
    })
}
