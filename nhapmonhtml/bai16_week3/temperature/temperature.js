class Temperature {
    constructor(doC) {
        this.doC = doC;
    }
    changeCtoF() {
        return this.doC * 9/5 + 32;
    }
    changeCtoK() {
        return this.doC + 273;
    }
}
let temperature = new Temperature();
temperature.doC = 25;
console.log(temperature.changeCtoF());
console.log(temperature.changeCtoK());