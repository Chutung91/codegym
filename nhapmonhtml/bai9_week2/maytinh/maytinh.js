var bieuthuc = document.getElementById("dien");
var toanHang = '0';
var giatri = null;
var lastToanTu = '+';

function nutBang(){
    switch (lastToanTu) {
        case '+':
            giatri = giatri + parseInt(toanHang);
            break;
        case '-':
            giatri = giatri - parseInt(toanHang);
            break
        case 'x':
            giatri = giatri * parseInt(toanHang);
            break;
        case '/':
            giatri = giatri / parseInt(toanHang);
            break;
    }
    // in ra
    bieuthuc.value = giatri;
    toanHang = '0';
    lastToanTu = '+';
}
// khoi tao cac toan tu so hoc
function nutCong(){
    switch (lastToanTu) {
        case '+':
            giatri = giatri + parseInt(toanHang);
            break;
        case '-':
            giatri = giatri - parseInt(toanHang);
            break
        case 'x':
            giatri = giatri * parseInt(toanHang);
            break;
        case '/':
            giatri = giatri / parseInt(toanHang);
            break;
    }
    // gan du lieu moi
    bieuthuc.value = bieuthuc.value + '+';
    toanHang = '0';
    lastToanTu = '+';
}
function nutTru(){
    switch (lastToanTu) {
        case '+':
            giatri = giatri + parseInt(toanHang);
            break;
        case '-':
            giatri = giatri - parseInt(toanHang);
            break
        case 'x':
            giatri = giatri * parseInt(toanHang);
            break;
        case '/':
            giatri = giatri / parseInt(toanHang);
            break;
    }
    // gan du lieu moi
    bieuthuc.value = bieuthuc.value + '-';
    toanHang = '0';
    lastToanTu = '-';
}
function nutNhan(){
    switch (lastToanTu) {
        case '+':
            giatri = giatri + parseInt(toanHang);
            break;
        case '-':
            giatri = giatri - parseInt(toanHang);
            break
        case 'x':
            giatri = giatri * parseInt(toanHang);
            break;
        case '/':
            giatri = giatri / parseInt(toanHang);
            break;
    }
    // gan du lieu moi
    bieuthuc.value = bieuthuc.value + 'x';
    toanHang = '0';
    lastToanTu = 'x';
}
function nutChia(){
    switch (lastToanTu) {
        case '+':
            giatri = giatri + parseInt(toanHang);
            break;
        case '-':
            giatri = giatri - parseInt(toanHang);
            break
        case 'x':
            giatri = giatri * parseInt(toanHang);
            break;
        case '/':
            giatri = giatri / parseInt(toanHang);
            break;
    }
    // gan du lieu moi
    bieuthuc.value = bieuthuc.value + '/';
    toanHang = '0';
    lastToanTu = '/';
}
// khoi tao cac nut so va C
function nut1(){
    bieuthuc.value = bieuthuc.value + '1';
    toanHang = toanHang + '1';
}
function nut2(){
    bieuthuc.value = bieuthuc.value + '2';
    toanHang = toanHang + '2';
}
function nut3(){
    bieuthuc.value = bieuthuc.value + '3';
    toanHang = toanHang + '3';
}
function nut4(){
    bieuthuc.value = bieuthuc.value + '4';
    toanHang = toanHang + '4';
}
function nut5(){
    bieuthuc.value = bieuthuc.value + '5';
    toanHang = toanHang + '5';
}
function nut6(){
    bieuthuc.value = bieuthuc.value + '6';
    toanHang = toanHang + '6';
}
function nut7(){
    bieuthuc.value = bieuthuc.value + '7';
    toanHang = toanHang + '7';
}
function nut8(){
    bieuthuc.value = bieuthuc.value + '8';
    toanHang = toanHang + '8';
}
function nut9(){
    bieuthuc.value = bieuthuc.value + '9';
    toanHang = toanHang + '9';
}
function nut0(){
    bieuthuc.value = bieuthuc.value + '0';
    toanHang = toanHang + '0';
}
function nutC(){
    giatri = 0;
    bieuthuc.value ='';
    toanHang = '0';
    lastToanTu = '+';
}
