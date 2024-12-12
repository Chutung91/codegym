let x1 = 1;
let x2 = 1;
let tong = 2;
let dem = 3;

while (dem <=20) {
    let tg = x1;
    x1 = x2;
    x2 = x2 + tg;
    tong = tong + x2;
    console.log(x2);
    dem++;
}
document.write(tong);