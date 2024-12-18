function kiemtra(x) {
    let kt = true;
    if (x < 2) {kt = false;} else {
        for (let i = 2; i <= Math.floor(Math.sqrt(x)); i++) {
            if (x % i == 0) {
                kt = false;
                break;
            }
            ;
        }
    }
    return kt;
}
let y = +prompt('hay nhap vao 1 so');
kiemtra(y) == true ? alert('day la so nguyen to') : alert('day khong phai so nguyen to');