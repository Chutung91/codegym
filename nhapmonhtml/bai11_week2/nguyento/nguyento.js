let i = 2;
let dem = 1;
let viet = '';
while (dem<=20) {
    let kt = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            kt = false;
            break;
        }
    }
    if (kt == true) {
        dem++;
        viet = viet + i + '<br>';
    }
    i++;
}

document.write(viet);