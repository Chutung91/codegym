let bang;
bang = '<table border="1" width="600" cellspacing="0" cellpadding="3">';

for (let i= 1; i <= 9; i++){
    bang = bang + "<tr>";
    for (let j = 2; j <= 9; j++){
        let tich = i*j;
        bang = bang + "<td>" + j + "x" + i + "=" + tich + "</td>";
    }
    bang = bang + "</tr>";
}
bang = bang + "</table>";

document.write(bang);