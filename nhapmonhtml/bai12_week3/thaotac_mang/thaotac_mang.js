let x = 0;
let array = Array();

function Add(){
    array[x] = document.getElementById('nhap').value;
    x++;
    document.getElementById('nhap').value = '';
}
function Display(){
    console.log(x);
    console.log(array.length);
    let hienthi = '';
    for (let i = 0; i < array.length; i++) {
        hienthi = hienthi + array[i] + '<br>';
    }
    document.getElementById('xuat').innerHTML = hienthi;
}