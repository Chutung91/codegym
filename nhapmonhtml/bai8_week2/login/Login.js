var ten = prompt("tên đăng nhập: ",'')

if (ten === 'Admin'){
    var mk =  prompt("mật khẩu: ",'');
    if (mk === "TheMaster") {
        alert('Welcome')
    } else {
        mk == '' ? alert('Canceled') : alert("Wrong password")
    }
} else {
    ten == '' ? alert('Canceled') : alert("I don't know you")
}