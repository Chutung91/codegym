var n = +prompt('nhap vao 1 so');
var tong = 0;
while (n != -1) {
    alert(n);
    tong = tong + n;
    console.log(tong);
    n = +prompt('nhap vao 1 so');
}
document.write(tong);