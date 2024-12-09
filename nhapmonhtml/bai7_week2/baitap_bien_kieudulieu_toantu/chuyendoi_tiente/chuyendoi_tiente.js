function convert(){
    let amount = document.getElementById("amount").value
    let from = document.getElementById("from").value
    let to = document.getElementById("to").value

    let a = parseFloat(amount)
    if (from === to){
        document.getElementById("kq").innerHTML = "Kết quả: " + a + " " + from
    } else {
        if (from === "VND") {
            let b = a/23000
            document.getElementById("kq").innerHTML = "Kết quả: " + b + " " + to
        } else {
            let b = a*23000
            document.getElementById("kq").innerHTML = "Kết quả: " + b + " " + to
        }
    }
}
