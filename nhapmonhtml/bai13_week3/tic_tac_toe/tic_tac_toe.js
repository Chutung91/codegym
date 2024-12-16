var n = 10;
var m = 10;
var a = new Array();
let hienthi = '';
for (let i = 0; i < n; i++) {
    a[i] = new Array();
    for (let j = 0; j < m; j++) {
        a[i][j] = '(.)';
        hienthi = hienthi + a[i][j] + '&nbsp';
    }
    hienthi = hienthi + '<br>';
}
document.getElementById('xuat').innerHTML = hienthi;
var x = 'x';
function changeValue() {
    // den luot cua x
    if (x === 'x') {
        let dong = +prompt('nhap dong cua x');
        while (dong > 10 && dong < 1) {
            dong = +prompt('nhap lai dong cua x');
        }
        let cot = +prompt('nhap cot cua x');
        while (cot > 10 && cot < 1) {
            cot = +prompt('nhap lai cot cua x');
        }
        a[dong-1][cot-1] = x;
        let hienthi = '';
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                hienthi = hienthi + a[i][j] + '&nbsp';
            }
            hienthi = hienthi + '<br>';
        }
        x = '0';
        document.getElementById('xuat').innerHTML = hienthi;
    } else {
        // den luot cua o
        let dong = +prompt('nhap dong cua o');
        while (dong > 10 && dong < 1) {
            dong = +prompt('nhap lai dong cua o');
        }
        let cot = +prompt('nhap cot cua o');
        while (cot > 10 && cot < 1) {
            cot = +prompt('nhap lai cot cua o');
        }
        a[dong-1][cot-1] = x;
        let hienthi = '';
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                hienthi = hienthi + a[i][j] + '&nbsp';
            }
            hienthi = hienthi + '<br>';
        }
        x = 'x';
        document.getElementById('xuat').innerHTML = hienthi;
    }
    // kiem tra thang thua
    var kt = false;
    var p = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (a[i][j] == '0' || a[i][j] == 'x') {
                // lech------------------------------------------------
                // trai tren
                if (i > 1 && j > 1) {
                    if (a[i][j] == a[i - 1][j - 1] && a[i][j] == a[i - 2][j - 2]) {
                        kt = true;
                        p = a[i][j];
                        break;
                    }
                    // trai
                    if (a[i][j] == a[i][j - 1] && a[i][j] == a[i][j - 2]) {
                        kt = true;
                        p = a[i][j];
                        break;
                    }
                    // trai duoi
                    if (a[i][j] == a[i + 1][j - 1] && a[i][j] == a[i + 1][j - 2]) {
                        kt = true;
                        p = a[i][j];
                        break;
                    }
                    // tren
                    if (a[i][j] == a[i - 1][j] && a[i][j] == a[i - 2][j]) {
                        kt = true;
                        p = a[i][j];
                        break;
                    }
                    // phai tren
                    if (a[i][j] == a[i - 1][j + 1] && a[i][j] == a[i - 2][j + 2]) {
                        kt = true;
                        p = a[i][j];
                        break;
                    }

                }
                // phai
                if (a[i][j] == a[i][j + 1] && a[i][j] == a[i][j + 2]) {
                    kt = true;
                    p = a[i][j];
                    break;
                }
                // phai duoi
                if (a[i][j] == a[i + 1][j + 1] && a[i][j] == a[i + 2][j + 2]) {
                    kt = true;
                    p = a[i][j];
                    break;
                }
                //duoi
                if (a[i][j] == a[i + 1][j] && a[i][j] == a[i + 2][j]) {
                    kt = true;
                    p = a[i][j];
                    break;
                }
                // o giua--------------------------------------------------
                if (i > 0 && j > 0) {
                    //12h
                    if (a[i][j] == a[i - 1][j - 1] && a[i][j] == a[i + 1][j + 1]) {
                        kt = true;
                        p = a[i][j];
                        break;
                    }
                    // 1r
                    if (a[i][j] == a[i - 1][j + 1] && a[i][j] == a[i + 1][j - 1]) {
                        kt = true;
                        p = a[i][j];
                        break;
                    }
                    //3h
                    if (a[i][j] == a[i][j + 1] && a[i][j] == a[i][j - 1]) {
                        kt = true;
                        p = a[i][j];
                        break;
                    }
                    // 4r
                    if (a[i][j] == a[i + 1][j + 1] && a[i][j] == a[i - 1][j - 1]) {
                        kt = true;
                        p = a[i][j];
                        break;
                    }
                }
            }
        }
        if (kt == true) {break;}
    }
    console.log(kt);
    if (kt == true) {alert(p + ' thang')}
}