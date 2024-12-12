let i = null;

do {
    i = +prompt("nhap vao 1 so:")
} while ((i < 0) || (i > 10));

alert("so ban vua nhap la: " + i);