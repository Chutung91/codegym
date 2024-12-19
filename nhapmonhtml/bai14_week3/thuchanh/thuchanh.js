// dien tich hinh tron khong co tham so
function dientich1() {
    return Math.PI * Math.pow(5, 2);
}

console.log(dientich1());

// dien tich hinh tron co tham so
function dientich2(x) {
    return Math.PI * Math.pow(x, 2);
}

console.log(dientich2(5));

// chu i hinh tron khong co tham so
function chuvi1() {
    return Math.PI * 2 * 5;
}

console.log(chuvi1());

// chu vi hinh tron co tham so
function chuvi2(x) {
    return Math.PI * x * 2;
}

console.log(chuvi2(5));

// bai5
function dongthoi(x) {
    let arr = [];
    arr[0] = Math.PI * Math.pow(x, 2);
    arr[1] = Math.PI * 2 * x;
    return arr;
}

for (i = 0; i < dongthoi(5).length; i++) {
    console.log(dongthoi(5)[i]);
}