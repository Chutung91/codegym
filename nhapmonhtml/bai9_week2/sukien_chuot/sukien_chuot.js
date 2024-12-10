let anh = null;
anh = document.getElementById("bong");
function init(){
    let anh = document.getElementById("bong");
    anh.style.position = 'relative';
    anh.style.left = '0px';
}
function moveRight() {
    anh.style.left = parseInt(anh.style.left) + 10 + 'px';
}
window.onload = init;
