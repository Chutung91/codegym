function dientich(){
    let bk = document.getElementById("r").value
    let dt = 3.14 * Math.pow(bk,2)
    let cv = 2*3.14*bk
    document.getElementById("dt").innerHTML = "Diện tích : " + dt
    document.getElementById("cv").innerHTML = "Chu vi : " + cv
}