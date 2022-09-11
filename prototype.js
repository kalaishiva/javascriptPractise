let arrOne = [1, 2, 3];

let userName = function(name, count) {
    this.name = name;
    this.count = count;
    this.getCourseCount = function() {
        console.log(`The course count is ${this.count}`);
    }
}

let userOne = new userName("Shiva", 4);
userOne.getCourseCount();

//Prototypal Inheritance
let ObjOne = {
    fullName: "Kalai",
    address: "Tamilnadu",
    getName: function() {
        console.log(this.fullName + " " + this.address);
    },
};


let ObjTwo = {
    fullName: "Sivakumar",

}

//with the help of __proto__ we can access ObjOne object inside the ObjTwo object
ObjTwo.__proto__ = ObjOne;

console.log(ObjTwo);
ObjTwo.getName();