function ktr(x,n) {
    if (x < n/2) {
        if (chuoi[x] == chuoi[n-x-1]) {return ktr(++x,n)} else {return false;}
    }
    return true;
}
let chuoi = prompt('nhap vao 1 chuoi');
alert(ktr(0,chuoi.length));