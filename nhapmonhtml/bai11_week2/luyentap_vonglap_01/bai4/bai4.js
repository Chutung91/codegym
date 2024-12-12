let x1 = 1;
let x2 = 1;
while (1) {
    let tg = x1;
    x1 = x2;
    x2 = x2 + tg;
    if (x2%5 == 0) {break;}
}
document.write(x2);