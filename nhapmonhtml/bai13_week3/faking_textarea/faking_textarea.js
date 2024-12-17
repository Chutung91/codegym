var x = 'toi la ke ngoc!';
var a = document.getElementById('a');
var dem = 0;
var thaythe = '';
function viet() {
     a.value = '';
     thaythe = thaythe + x[dem];
     dem++;
     a.value = thaythe;
     if (dem > 14) {
         dem = 0;
         thaythe = '';
     }
}