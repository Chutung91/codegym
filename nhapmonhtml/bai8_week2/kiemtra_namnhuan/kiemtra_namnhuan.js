function kiemtra(){
    var nam = document.getElementById("nam").value
    if (((nam%4 == 0) && (nam%100 != 0)) || ((nam%100 == 0) && (nam%400 == 0))) {
        document.getElementById("name").innerHTML = "Đây là năm nhuận"
    } else {
        document.getElementById("name").innerHTML = "Đây không phải năm nhuận"
    }
}