var n = +prompt('nhap vao 1 so');

if (n>0) {
    var tong = 0;
    for (var i=1; i<=n ; i++) {
        tong +=i;
    }
    alert(tong);
} else {alert('nhap lai')}
