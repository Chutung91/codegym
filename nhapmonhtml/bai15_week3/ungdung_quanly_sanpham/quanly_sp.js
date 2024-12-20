let n = 0;
let arrProduct = [];
// in ra cac san pham
function inRa() {
    document.getElementById('soluong').innerHTML = n + ' products';
    let hienThi;
    hienThi = '<table>';
    for (let i = 0; i < n; i++) {
        hienThi = hienThi + '<tr>';
        hienThi = hienThi + '<td>'+ arrProduct[i] +'</td>';
        hienThi = hienThi + '<td>'+ '<input type="submit" value="Edit" onclick="Edit(' + i + ')">' +'</td>';
        hienThi = hienThi + '<td>'+ '<input type="submit" value="Delete" onclick="Delete()">' +'</td>';
        hienThi = hienThi + '</tr>';
    }
    hienThi = hienThi + '</table>';
    document.getElementById('hienthi').innerHTML = hienThi;
}
// them san pham
function addProduct() {
    if (document.getElementById('productName').value != '') {
        arrProduct[n] = document.getElementById('productName').value;
        n = n + 1;
    }
    inRa();
    document.getElementById('productName').value = '';
}
// sua san pham
function Edit() {

}
// xoa san pham
function Delete() {

}




