function dich() {
    let text = document.getElementById('text').value;
    let a = ['apple', 'banana', 'orange', 'peach'];
    let b = ['táo', 'chuối', 'cam', 'đào'];
    if (a.indexOf(text) >=0) {
        document.getElementById('demo').innerHTML =b[a.indexOf(text)];
    }
}