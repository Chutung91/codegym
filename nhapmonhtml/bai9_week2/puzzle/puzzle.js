var anh1 = document.getElementById('anh1');
var dem1 = 1;
var kt1 = 'phongcanh';
// khai bao anh1
var anh2 = document.getElementById('anh2');
var dem2 = 1;
var kt2 = 'hoa';
// khai bao anh2
var anh3 = document.getElementById('anh3');
var dem3 = 1;
var kt3 = 'cogai';
// khai bao anh3
if ((kt1 == kt2) && (kt1 == kt3)) { document.getElementById("in").innerHTML = "dong bo";}
else {
    document.getElementById("in").innerHTML = "chua dong bo";
}
function doiAnh1() {
    switch (dem1) {
        case 1:
            anh1.src = 'hoa1.jpg';
            kt1 = 'hoa';
            break;
        case 2:
            anh1.src = 'cogai1.jpg';
            kt1 = 'cogai';
            break;
        case 3:
            anh1.src = 'phongcanh1.jpg';
            kt1 = 'phongcanh';
            break;
    }
    dem1++;
    if ( dem1 == 4) { dem1 = 1;}
    if ((kt1 == kt2) && (kt1 == kt3)) { document.getElementById("in").innerHTML = "dong bo";}
    else {
        document.getElementById("in").innerHTML = "chua dong bo";
    }
}
//******************************************
function doiAnh2() {
    switch (dem2) {
        case 1:
            anh2.src = 'cogai2.jpg';
            kt2 = 'cogai';
            break;
        case 2:
            anh2.src = 'phongcanh2.jpg';
            kt2 = 'phongcanh';
            break;
        case 3:
            anh2.src = 'hoa2.jpg';
            kt2 = 'hoa';
            break;
    }
    dem2++;
    if ( dem2 == 4) { dem2 = 1;}
    if ((kt1 == kt2) && (kt1 == kt3)) { document.getElementById("in").innerHTML = "dong bo";}
    else {
        document.getElementById("in").innerHTML = "chua dong bo";
    }
}
//******************************************
function doiAnh3() {
    switch (dem3) {
        case 1:
            anh3.src = 'phongcanh3.jpg';
            kt3 = 'phongcanh';
            break;
        case 2:
            anh3.src = 'hoa3.jpg';
            kt3 = 'hoa';
            break;
        case 3:
            anh3.src = 'cogai3.jpg';
            kt3 = 'cogai';
            break;
    }
    dem3++;
    if ( dem3 == 4) { dem3 = 1;}
    if ((kt1 == kt2) && (kt1 == kt3)) { document.getElementById("in").innerHTML = "dong bo";}
    else {
        document.getElementById("in").innerHTML = "chua dong bo";
    }
}