var n = 10;
var m = 10;
var a = new Array();
let hienthi = '';
for (let i = 0; i < n; i++) {
    a[i] = new Array();
    for (let j = 0; j < m; j++) {
        a[i][j] = '0';
        hienthi = hienthi + a[i][j] + '&nbsp';
    }
    hienthi = hienthi + '<br>';
}
document.getElementById('xuat').innerHTML = hienthi;

function changeValue() {
    let dong = +prompt('nhap dong');
    while (dong > 10 && dong < 1) {
        dong = +prompt('nhap lai dong');
    }
    let cot = +prompt('nhap cot');
    while (cot > 10 && cot < 1) {
        cot = +prompt('nhap cot');
    }
    let giatri = prompt('nhap gia tri');
    while (giatri != '0' && giatri != 'x') {
        giatri = prompt('nhap gia tri');
    }
    a[dong-1][cot-1] = giatri;
    let hienthi = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            hienthi = hienthi + a[i][j] + '&nbsp';
        }
        hienthi = hienthi + '<br>';
    }
    document.getElementById('xuat').innerHTML = hienthi;
}
