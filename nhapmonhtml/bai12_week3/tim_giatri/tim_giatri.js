let numbers = [-3,5,1,3,2,10];
let value = +prompt('nhap vao 1 so ');

let kt = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == value) {
        alert('vi tri cua so da nhap trong mang la: ' + i);
        kt = true;
        break;
    }
}
if (kt == false) {alert('khong co so do trong mang da cho');}
