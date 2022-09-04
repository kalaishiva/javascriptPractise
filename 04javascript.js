// //string to number
// let fakeNum = "24";
// let originalNum = Number(fakeNum);
// console.log(originalNum);
// console.log(typeof originalNum);



// //number to string

// let newnum = 25;
// let orgnum = String(newnum);
// console.log(orgnum);
// console.log(typeof orgnum);

//Destructuring (if we have a value inside an array, take that value outside the array and store that value in the variables)

// let scivalue = [2.72, 3.14, 9.81, 37, 100];
// let [e, pi, gravity, bodytemp, boil] = scivalue;

// console.log(e);
// console.log(bodytemp);

// let fullstack = [
//     ['html', 'css', 'js', 'tailwind'],
//     ['node', 'express', 'mongodb']
// ];

// let [frontend, backend] = fullstack;

// console.log(frontend);

// let arrayone = [1, 2, 3, 4, 5];
// let [a, , b, , c] = arrayone; //it skip the 2 and 4 by giving the empty space. that is without the variable.
// console.log(c);


// let arrayone = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let [a, b, ...remainingNum] = arrayone;

// console.log(a, b); //1 2
// console.log(remainingNum); // [3, 4, 5, 6, 7, 8, 9]

//Spread and REST


//Spread

// function sum(x, y) {
//     return x + y;
// }

// let vari = [5, 9];
// console.log(sum(...vari)); //spread Op


// REST

// function sumtwo(...args) { //...args -- its the REST----it store the values coming in and it store as an array.
//     let sum = 0;
//     for (let a of args) {
//         sum = sum + a;
//     }
//     return sum;

// }
// console.log(sumtwo(1, 2, 3, 4, 5));


// NEW (new is a keyword)

// let person = new Object(); //

// person.name = "Kalai";
// person.age = 34;
// console.log(person);


var person = function(firstname, coursecount) {
    this.firstname = firstname;
    this.coursecount = coursecount;
};

// var shiva = new person("Shivakumar", 2); //new is giving new memory(array) to store all the data for shiva
// console.log(shiva);


// var kalai = new person("Kalaivani", 4);
// console.log(kalai);

// Set and Map

// Set -> Set will have only unique elements

// let a = [1, 2, 3, 1, 2, 3, 4, 3, 2, 4, 1, 2, 4, 1, 12, 4, 3];

// let num = new Set(a);
// console.log(num);

// //if we need to add

// num.add(100);
// console.log(num);

// //to delete

// num.delete(12);
// console.log(num);

// //check is the 7 is present

// console.log(num.has(7)); //false
// console.log(num.has(100)); //true

// for (let i of num) {
//     console.log(i);
// }

//Maps--hold key value pairs...key can be of any datatype

//getter and setter
// let newmap = new Map();
// console.log(newmap);

// // newmap.set(key, value);

// newmap.set("1", "one");
// newmap.set(1, "one");
// newmap.set(true, "one");

// console.log(newmap);

// {1: one} //object
// {1, 2, 3, 4} //set(unique single value)
// { '1' => 'one', 1 => 'one', true => 'one' } //Map

// let city = [
//     ['India', 'Delhi'],
//     ['Tamilnadu', 'Chennai'],
//     ['Karnataka', 'Bangalore']

// ];

// let newmap = new Map(city);
// console.log(newmap);
// console.log(newmap.get('Tamilnadu'));

//for iteration

// for (let [keys, values] of newmap) {
//     console.log(key.keys());
// }


//Closuer -- inner function access variable of outer function they are called Closuer

//example - 1
// function outer() {
//     let variable = 'Seven';

//     //this is inner function
//     function inner() {
//         console.log(variable);
//     }
//     inner();
// }
// outer();


//example - 2

// console.log("Closure");

// function outer() {
//     let var1 = "Kalai";

//     function inner() {
//         console.log(var1);
//     }
//     return inner;
// }


// let var1 = outer();
// var1(); //kalai
// console.log(var1); //[Function: inner]