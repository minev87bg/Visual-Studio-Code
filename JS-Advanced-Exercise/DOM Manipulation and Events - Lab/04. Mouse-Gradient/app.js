function attachGradientEvents() {
    let result = document.getElementById("result")
    let gradient = document.getElementById('gradient')
    gradient.addEventListener('mousemove', (event) => { result.textContent = `${Math.floor(event.offsetX / 300 * 100)}%` })
}