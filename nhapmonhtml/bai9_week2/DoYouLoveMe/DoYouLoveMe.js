function Yes(){
    alert('<3')
}

let viTri = null;
viTri = document.getElementById('viTri');

function move(){
    let x = 30 + Math.random()*100;
    let y = Math.floor(Math.random()*4);
    switch (y) {
        case 0:
            viTri.style.left = parseInt(viTri.style.left) + x + 'px';
            break;
        case 1:
            viTri.style.top = parseInt(viTri.style.top) + x + 'px';
            break;
        case 2:
            viTri.style.left = parseInt(viTri.style.top) - x + 'px';
            break;
        case 3:
            viTri.style.top = parseInt(viTri.style.top) - x + 'px';
    }


}

function init(){
    let viTri = document.getElementById('viTri');
    viTri.style.position = 'relative';
    viTri.style.left = '0px';
    viTri.style.top = '0px';
}

window.onload = init;