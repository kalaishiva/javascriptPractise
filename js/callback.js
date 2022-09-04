/*
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}
*/

//short way of writing
/*
function isEven(num) {
    return num % 2 === 0;
}
*/

//arrow function
/*
let isEven = (num) => {
    return num % 2 === 0;
}
console.log(isEven(4)); //true
console.log(isEven(5)); //false
*/

/*
let result = [2, 4, 6, 8].every((num) => {
    return num % 2 === 0;
})
console.log(result);
*/


// filter -- it iterate into the array and create a new array

const number = [20, 44, 67, 53, 86, 27];

const del = number.filter((num) => num != 86);
const result = number.filter((num) => num < 50);
const result1 = number.filter((num) => num % 2 === 0);

console.log(del); //[ 20, 44, 67, 53, 27 ] //if we need to delete the particular value or the id.
console.log(result); //[ 20, 44, 27 ]
console.log(result1); //[ 20, 44, 86 ]

//fill

let filledValue = [5, 7, 9, 2];
let alpha = [23, 34, 53, 80, 63];
let num1 = [1, 2, 3, 4, 5, 6, 7];


console.log(filledValue.fill("empty")); //[ 'empty', 'empty', 'empty', 'empty']
console.log(alpha.fill("kalai", 3)); //[ 23, 34, 53, 'kalai', 'kalai' ]
console.log(num1.fill("k", 2, 5)); // [1, 2, 'k', 'k', 'k', 6, 7 ]  //5 is the exclusive