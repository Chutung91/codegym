let myDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;

    this.setDay = function (day) {
        this.day = day;
    }
    this.setMonth = function (month) {
        this.month = month;
    }
    this.setYear = function (year) {
        this.year = year;
    }

    this.getDay = function () {
        return this.day;
    }
    this.getMonth = function () {
        return this.month;
    }
    this.getYear = function () {
        return this.year;
    }
}
// get day
let date = new myDate(2, 2, 2007);
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
alert(day + '/' + month + '/' + year);
// set day
date.setDay(10);
date.setMonth(10);
date.setYear(2019);
console.log(date.day);