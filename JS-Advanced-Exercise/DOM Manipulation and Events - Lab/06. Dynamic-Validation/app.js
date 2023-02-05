function validate() {
    let input = document.querySelector('#email')
    let pattern = /^[a-z]+([\.-]?[a-z]+)*@[a-z]+([\.-]?[a-z]+)*(\.[a-z]{2,3})+$/gm
    input.addEventListener('change', () => {
        if (!input.value.match(pattern)) { input.className = 'error' }
        else input.className = ""
    })
}