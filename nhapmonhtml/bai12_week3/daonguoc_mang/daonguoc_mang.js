let x = [-3,5,1,3,2,10];
let first = 0;
let last = x.length - 1;

while (first < last) {
    let tg = x[first];;
    x[first] = x[last];
    x[last] = tg;
    first++;
    last--;
}
for (let i = 0; i < x.length; i++) {
    document.write(x[i] + '<br>');
}