
function chuyendoi(){
    var doC1 = document.getElementById("c").value;
    let doC = parseInt(doC1);
    let doF = doC/5*9+32;
    document.getElementById("d").innerHTML = "Kết quả " + doF;
}
