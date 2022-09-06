//1. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.


// let strValue = "Kalai";
// let booleanValue = true;
// let undefValue;
// let nullValue = null;

// console.log(`${strValue}  ${typeof strValue}`);   //Kalai  string
// console.log(`${booleanValue} ${typeof booleanValue}`);  //true boolean
// console.log(`${undefValue} ${typeof undefValue }`);   //undefined undefined
// console.log(`${nullValue} ${typeof nullValue}`);   //null object

//2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.
// let firstName = "Kalaivani";
// let lastName = "Sivakumar";
// let marital = "married";
// let country = "Germany";
// let age = 34;

// console.log(`This is ${firstName} ${lastName}, ${age} years old and I am ${marital} , currently living in ${country}.`);
//This is Kalaivani Sivakumar, 34 years old and I am married , currently living in Germany.

//3. Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.
// let letter = "Kalai";
// let upperCase = letter.toUpperCase();

// console.log(upperCase); //KALAI

//4. Check if the string contains a word Script using includes() method.

// let course = "Hi guys, Welcome to the Full Stack development Bootcamp";
// let result = course.includes("Bootcamp");
// let result1 = course.includes("zal");

// console.log(result); //true
// console.log(result1);  //false

//5. Split the string into an array using split() method
// let quote = "Hi welcome to our coding community";

// let result = quote.split(" ");
// console.log(result); //[ 'Hi', 'welcome', 'to', 'our', 'coding', 'community' ]

//6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

// let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

// let changeToArray = company.split(",");
// console.log(changeToArray); // [ 'Facebook',' Google', ' Microsoft', ' Apple', ' IBM', ' Oracle', ' Amazon']

//7. Use lastIndexOf to determine the position of the last occurrence of a script.

// let tree = "Tree is very important for our world, tree is mainly for oxygen, tree prevent soil erosion";

// let result = tree.lastIndexOf('tree');
// console.log(result);


//8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.

// let sentence = 'You cannot end a sentence with because because because is a conjunction';
// let searchWord = 'because';

// let result = sentence.indexOf(searchWord);
// let result1 = sentence.indexOf(searchWord, (result + 1));
// console.log(result);
// console.log(result1);


//9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.
// let greeting = "        Hello world     ";
// console.log(greeting.trim());

//Boolean value is either true or false.
// - Write three JavaScript statement which provide truthy value.
// let a = 14;
// console.log(Boolean(a));

// let b = -4;
// console.log(Boolean(b));

// let c = "kalai";
// console.log(Boolean(c));

// let d = "false";
// console.log(Boolean(d));


// - Write three JavaScript statement which provide falsy value.

// let x = 0;
// console.log(Boolean(x));

// let y = "";
// console.log(Boolean(y));

// let z;
// console.log(Boolean(z));

// let h = null;
// console.log(Boolean(h));

// let k = false;
// console.log(Boolean(k));


//11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// - 4 > 3
// console.log(4 > 3); //true

// // - 4 >= 3
// console.log(4 >= 3); //true

// // - 4 < 3
// console.log(4 < 3); //false

// // - 4 <= 3
// console.log(4 <= 3); //false

// // - 4 == 4
// console.log(4 == 4); //true

// // - 4 === 4
// console.log(4 === 4); //true

// // - 4 != 4
// console.log(4 != 4); //false

// // - 4 !== 4
// console.log(4 !== 4); //false

// // - 4 != '4'
// console.log(4 != '4'); //false

// // - 4 == '4'
// console.log(4 == '4'); //true

// // - 4 === '4'
// console.log(4 === '4'); //false

// - Find the length of python and jargon and make a falsy comparison statement.

// the length of python and jargon and make a falsy comparison statement.

//12. Use the Date object to do the following activities
/*
const calender = new Date();
console.log(calender); //Mon Sep 05 2022 21:38:21 GMT+0200 (Central European Summer Time)

// - What is the year today?
let year = calender.getFullYear()
console.log(year); //2022


// - What is the month today as a number?
let month = calender.getMonth()
console.log(month); //8

// - What is the date today?
let date = calender.getDate();
console.log(date); //5

// - What is the day today as a number?
let day = calender.getDay();
console.log(day); //1

// - What is the hours now?
let hours = calender.getHours();
console.log(hours); //23

// - What is the minutes now?
let minutes = calender.getMinutes();
console.log(minutes);

//find seconds
let seconds = calender.getSeconds();
console.log(seconds);

// - Find out the numbers of seconds elapsed from January 1, 1970 to now.

const now = new Date();
const secondsSinceEpoch = Math.round(now.getTime() / 1000);
console.log(secondsSinceEpoch);

*/

// 17. Create a human readable time format using the Date time object
let calender = new Date();
let year = calender.getFullYear();
let month = calender.getMonth();
let date = calender.getDate();
let hours = calender.getHours();
let min = calender.getMinutes();

//     YYYY - MM - DD HH: mm
let yearMonthDate = `${year} - ${month} - ${date}  ${hours}: ${min}  `;
console.log(yearMonthDate);

//     DD - MM - YYYY HH: mm -
let dateMonthYear = `${date} - ${month} - ${year}  ${hours}: ${min}`;
console.log(dateMonthYear);

//     DD / MM / YYYY HH: mm
let dateMonthYear1 = `${date} / ${month} / ${year}  ${hours}: ${min}`;
console.log(dateMonthYear1);