
// Background Flipper

let colors = ["aqua", "brown", "red", "pink", "crimson", "coral", "chocolate"]
function changeColor() {
    var randomColor = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[randomColor]
    document.getElementsByTagName("span")[0].innerText = colors[randomColor]
}