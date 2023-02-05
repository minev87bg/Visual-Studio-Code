function solve(w, h, colour) {
    colour = `${colour[0].toUpperCase()}${colour.slice(1,)}`
    let rect = {
        width: Number(w),
        height: Number(h),
        color: colour,
        calcArea: function calcArea() { return w * h }
    }
    return rect
}
solve(4, 5, "red")
