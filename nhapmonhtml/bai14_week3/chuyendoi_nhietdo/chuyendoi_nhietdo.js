function change() {
    let f = document.getElementById("fahrenheit").value;
    console.log(typeof f);
    let c = (f - 32) / 1.8;
    document.getElementById("celcius").innerHTML = c;
}