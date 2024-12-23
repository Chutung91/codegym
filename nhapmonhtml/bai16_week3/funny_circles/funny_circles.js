function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}
function getRandomHex() {
    return Math.floor(Math.random() * 255);
}
function getRandomColor() {
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
        return "rgb(" + red + "," + green + "," + blue + ")";
}
function createCircle() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var radius = Math.floor(Math.random() * 80);
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var circle = new Circle(x, y, radius);
    var color = getRandomColor();
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}
createCircle();
createCircle();