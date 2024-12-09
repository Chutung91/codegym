let i = 10
let f = 20.5
let b = true
let s = 'Hà Nội'

document.write('i = ' + i)
document.write('<br/>')
document.write('f = ' + f)
document.write('<br/>')
document.write('b = ' + b)
document.write('<br>')
document.write('s = ' + s)
document.write('<br>')
// bai1
let width = 20
let height = 10
let area =width * height
document.write('Area = ' + area)
// bai2
let a
let bb
function nhapa(){
    a = prompt("nhập a")
}
function nhapb(){
    bb = prompt("nhập b")
}
function kiemtra(){
    let c = a%bb == 0;
    alert(c)
}
