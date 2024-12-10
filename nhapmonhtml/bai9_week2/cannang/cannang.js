function kiemtra(){
    let cn = document.getElementById('cn').value;
    let cc = document.getElementById('cc').value;

    let bmi = cn/(Math.pow(cc,2));
    console.log(bmi);
    bmi<18.5 ? document.getElementById('bmi').innerHTML = "Underweight" :
        ( bmi<25.0 ? document.getElementById("bmi").innerHTML = "Normal" :
            (bmi<30.0 ? document.getElementById("bmi").innerHTML = "Overweight" :
                document.getElementById("bmi").innerHTML = "Obese"));
}