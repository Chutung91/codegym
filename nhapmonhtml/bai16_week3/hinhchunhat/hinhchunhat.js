let Rectangle = function (dai, rong) {
    this.dai = dai;
    this.rong = rong;
    this.calculateArea = function() {
        return this.dai * this.rong;
    }
    this.calculatePerimeter= function() {
        return (this.dai + this.rong) * 2;
    }
}
function hienthi() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let dai = Math.floor(Math.random() * 100 + 400);
    let rong = Math.floor(Math.random() * 400);
    let rectangle = new Rectangle(dai, rong);
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, rectangle.dai, rectangle.rong);
    document.getElementById("in").innerHTML = rectangle.calculateArea() + '<br>' + rectangle.calculatePerimeter();
}
hienthi();
