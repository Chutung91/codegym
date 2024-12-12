let x1 = 1;
let x2 = 1;
let dem = 3;
let text = '1' + '<br>' + '1' + '<br>';
while (dem <= 20) {
    let tg = x1;
    x1 = x2;
    x2 = x2 + tg;
    text = text + x2 + '<br>';
    dem++;
}

document.write(text);