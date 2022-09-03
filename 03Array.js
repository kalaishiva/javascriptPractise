let Arr1 = ["kalai", "shivani", "siva", "Ragu", "sara"];

console.log(Arr1);

// Length of array

console.log(Arr1.length); //5

// last item

console.log(Arr1[Arr1.length - 1]); //gives last item

// change the 3 index

Arr1[3] = "Arasi";
console.log(Arr1); //[ 'kalai', 'shivani', 'siva', 'Arasi', 'sara' ]


// add item at the last

Arr1.push("Pandiyan");
console.log(Arr1); //[ 'kalai', 'shivani', 'siva', 'Arasi', 'sara', 'Pandiyan' ]


// slice
//syntax array.slice(startindex, endindex)

let Arr2 = Arr1.slice(1, 4);
console.log(Arr2); //[ 'shivani', 'siva', 'Arasi' ]

//splice
//overwrite the original array

let fruits = ["Apple", "Orange", "kiwi", "Pear", "Mango", "passionfruit"];
console.log(fruits);

fruits.splice(2, 0, "New Value 1", "New Value 2"); //splice(index to start inserting the value,delete value,insert value1, insert value2)
console.log(fruits); //

fruits.splice(2, 2, "New Value 1", "New Value 2");
console.log(fruits);

// join two array

let alp = ["Aa", "Bb", "Cc", "Dd", "Ee", "Ff"];
let num1 = [1, 2, 3, 4, 5];
let num2 = [6, 7, 8, 9, 10];
console.log(alp.concat(num1)); //[ 'Aa', 'Bb', 'Cc', 'Dd', 'Ee', 'Ff', 1,    2,  3,    4,    5 ]
console.log(alp.concat(num1, num2)); //[ 'Aa', 'Bb', 'Cc', 'Dd', 'Ee', 'Ff', 1,    2,  3,    4,    5, 6, 7, 8, 9, 10 ]


//copyWithin
//syn: Array.copyWithin(target_index, start,end)
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(num.copyWithin(1, 5, 8));

//includes(check the value if it present in the correct index)//gives true or false.
//array.includes(value, index)....eg----num1.includes(3,2)-----true

//indexOf().-------(alp.indexOf("Dd"));---------3


//MAP

let asqr = [1, 4, 9, 16]; // if we give the condition it will apply to the full array
// console.log(asqr.map(Math.asqr));
console.log(asqr.reverse());

console.log(asqr.shift()); //first index is removed----modified the original array
console.log(asqr);


//sort
let eat = ["Apple", "Orange", "Kiwi", "Pear", "Mango", "Passionfruit"];
console.log(eat.sort()); // gives alphabetical order
console.log(eat.toString()); //convert the array to text.

//unshift
console.log(eat.unshift("Shivani")); //7
console.log(eat);

//split
let str = "Javascript";
let ar1 = str.split("");
console.log(ar1); //[ 'J', 'a', 'v', 'a','s', 'c', 'r', 'i','p', 't' ]

//math
const PI = Math.PI; //its build in math
console.log(PI);


//Math.floor and Math.ceil
console.log(Math.floor(PI)); //3----if we have 
//value 3.14
// floor= 3
//ceil = 4
console.log(Math.ceil(PI)); //4

//Math.min
console.log(Math.min(4, 6, 1, 7, 8)); //1
console.log(Math.min(4, 6, 1, -7, 8)); //-7
console.log(Math.max(4, 6, 1, 7, 8)); //8

//Math.random
let num3 = Math.random(); //give btw 0 to 1
let num4 = Math.random() * 10; //give btw 1  to 10
console.log(num4);

console.log(Math.abs(-10));
console.log(Math.sqrt(49));

console.log(Math.pow(3, 4)); //3*3*3*3=81

//console.log(Math.sin(60)); //trignometic value