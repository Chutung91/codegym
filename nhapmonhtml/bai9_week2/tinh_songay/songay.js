function tinh(){
    let thang = +document.getElementById("thang").value;
    switch (thang) {
        case 4: case 6: case 9: case 11:
            document.getElementById("xuat").innerHTML = "Tháng " + thang + " có 30 ngày";
            break;
        case 2:
            document.getElementById("xuat").innerHTML = "Tháng " + thang + " có 28 hoặc 29 ngày"
            break;
        default:
            document.getElementById("xuat").innerHTML = "Tháng " + thang + " có 31 ngày"
    }
}