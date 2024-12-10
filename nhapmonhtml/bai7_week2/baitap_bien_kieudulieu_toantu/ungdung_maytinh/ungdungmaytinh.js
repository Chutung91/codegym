var a = +document.getElementById("a").value
var b = +document.getElementById("b").value

console.log(a, b)

function tru(){
    let ptru = a-b
    document.getElementById("c").innerHTML = "Kết quả: " + ptru
}

function cong(){
    var a = +document.getElementById("a").value
    var b = +document.getElementById("b").value
    console.log(a, b)
    let pcong = a+b
    document.getElementById("c").innerHTML = "Kết quả: " + pcong
}
function nhan(){
    let pnhan = a*b
    document.getElementById("c").innerHTML = "Kết quả: " + pnhan
}
function chia(){
    let pchia = a/b
    document.getElementById("c").innerHTML = "Kết quả: " + pchia
}