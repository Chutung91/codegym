function feetChange() {
    let feet = document.getElementById("feet").value;
    document.getElementById("outMeters").innerHTML = feet * 0.305;
}
function metersChange() {
    let meters = document.getElementById("meters").value;
    document.getElementById("outFeet").innerHTML = meters * 3.279;
}