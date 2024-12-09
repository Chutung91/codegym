let ly1 = prompt("vật lý")
let hoa1 = prompt("hóa học")
let sinh1 = prompt("sinh học")

let ly = parseInt(ly1)
let hoa = parseInt(hoa1)
let sinh =  parseInt(sinh1)
document.write('điểm lý ' + ly)
document.write('<br>')
document.write('điểm hóa ' + hoa)
document.write('<br>')
document.write('điểm sinh ' + sinh)
document.write('<br>')
let tb = (ly+hoa+sinh)/3
document.write('điểm trung bình ' + tb)
document.write('<br>')
let tong = ly+hoa+sinh
document.write('Tổng điểm ' + tong)
