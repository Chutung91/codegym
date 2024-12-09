function cong(){
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)
    let pcong = a+b
    document.getElementById("c").innerHTML = "Kết quả: " + pcong
}
function tru(){
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)
    let ptru = a-b
    document.getElementById("c").innerHTML = "Kết qu: " + ptru
}
function nhan(){
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)
    let pnhan = a*b
    document.getElementById("c").innerHTML = "Kết quả: " + pnhan
}
function chia(){
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)
    let pchia = a/b
    document.getElementById("c").innerHTML = "Kết quả: " + pchia
}