const matrix = new Array(3);
let m = 0
for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(3);

    for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = j+m+1;
    }
    m = m + 3;
}
console.log(matrix);
let tong = 0;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        tong += matrix[i][j];
    }
}
console.log(tong);