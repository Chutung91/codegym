/*function students(id, name, address) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.getInfor = function () {
        return 'Id= ' + this.id + ' Name=' + this.name + ' Address=' + this.address;
    }
}
var student =new students(1, 'Nguyen Van A', 'Ha Noi');
console.log(student.getInfor());*/

var student = {
    id: 1,
    name: "Nguyen Van A",
    address: "Ha Noi",
    getInfor: function() {
        return 'Id= ' + this.id + ' Name=' + this.name + ' Address=' + this.address;
    }
}
console.log(student.getInfor());
