function gramophone(band, album, song) {
    let duration = (band.length * album.length) * song.length / 2
    times = Math.ceil(duration / 2.5)
    console.log(`The plate was rotated ${times} times.`)
}
gramophone("Black Sabbath", "Paranoid", "War Pigs")