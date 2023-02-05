function extract(ref) {
    let pattern = /\((?<match>[A-z\s]*)\)/gm
    let content = document.getElementById(ref).textContent.match(pattern)
    return content.join(";")
}