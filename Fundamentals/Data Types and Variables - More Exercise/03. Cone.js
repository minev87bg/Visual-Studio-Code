function cone(rad, height) {
    let volume = (Math.PI * rad * rad * height) / 3
    let slant = Math.sqrt(rad * rad + height * height)
    let area = Math.PI * rad * (rad + slant)
    console.log(`volume = ${volume.toFixed(4)}\narea = ${area.toFixed(4)}`)
}
cone(3, 5)