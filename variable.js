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
/*
//13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle(area = 0.5 x b x h).

let base = prompt("Enter the base");
let height = prompt("Enter the height");

let areaOfTriangle = 0.5 * (base * height);
console.log(base);
console.log(height);
console.log(`The area of the triangle with the base ${base} and the height ${height} is =  ${areaOfTriangle}`);
*/
/*
//18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let user = prompt("Enter your age : ");
let waitingYears = 18 - user;
if (user >= 18) {
    console.log('You are old enough to drive');
} else {
    console.log(`wait for ${waitingYears} years you needs to turn 18`)
};
*/
/*
//19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let num = prompt("Enter the number");
if (num % 2 === 0) {
    console.log(`The number ${num} is even `);
} else {
    console.log(`The number ${num} is odd`);
}
*/
//20. Write a code which can give grades to students according to theirs scores:
// - 80-100, A
// - 70-89, B
// - 60-69, C
// - 50-59, D
// - 0-49, F
/*
let inputScore = prompt("Enter the score between 0 to 100");
let scores = parseInt(inputScore);

if (scores >= 80 && scores <= 100) {
    console.log(`The Student is A grade`);
} else if (scores >= 70 && scores <= 89) {
    console.log(`The Student is B grade`);
} else if (scores >= 60 && scores <= 69) {
    console.log(`The Student is C grade`);
} else if (scores >= 50 && scores <= 59) {
    console.log(`The Student is D grade`);
} else if (scores >= 0 && scores <= 49) {
    console.log(`The Student is F grade`);
}
*/
// 21. Check
// if the season is Autumn, Winter, Spring or Summer.If the user input is:
//     -September, October or November, the season is Autumn. -
//     December, January or February, the season is Winter. -
//     March, April or May, the season is Spring. -
//     June, July or August, the season is Summer.

// let month = prompt("enter the month");

// if (month === "September" || "October" || "November") {
//     console.log(`The season is Autumn.`)
// } else if (month === "December" || "January" || "February") {
//     console.log(`The season is Winter.`)
// } else if (month === "March" || "April" || "May") {
//     console.log(`The season is Spring.`)
// } else if (month === "June" || "July" || "August") {
//     console.log(`The season is Summer.`)
// }

//22. Write a program which tells the number of days in a month.

//let month = prompt('Enter the month');


// if (month == "january" || month == "march" || month == "may" || month == "july" || month == "august" || month == "october" || month == "december") {
//     console.log(`${month} is having  31 days`);
// } else if (month == "april" || month == "june" || month == "september" || month == "november") {
//     console.log(`${month} is having 30 days`)
// } else if (month == "february") {
//     console.log(`${month} is having 28 days`)
// }





//23. Write a program which tells the number of days in a month, now consider leap year.
let leapYear = prompt("Enter the year ");

if (leapYear % 4 === 0) {
    if (leapYear % 100 === 0) {
        if (leapYear % 400 === 0) {
            console.log(`It's  a leap year`);
        } else {
            console.log(`It's not a leap year`);
        }

    } else {
        console.log(`It's  a leap year`);

    }

} else {
    console.log(`It's not a leap year`);
}





/*
//16. Get radius using prompt and calculate the area of a circle(area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt("Radius");
let pi = Math.PI;
console.log(pi);
let areaOfCircle = pi * (radius * radius);
console.log(`The area of circle with radius ${radius} = ${areaOfCircle}`);

let circumferenceOfCircle = 2 * pi * radius;
console.log(`The circumference of circle is with radius ${radius} = ${circumferenceOfCircle}`);
*/
/*
// 17. Create a human readable time format using the Date time object
let calender = new Date();
let year = calender.getFullYear();
let month = calender.getMonth();
let date = calender.getDate();
let hours = calender.getHours();
let min = calender.getMinutes();

//     YYYY - MM - DD HH: mm
let yearMonthDate = `${year} - ${month} - ${date}  ${hours}: ${min}  `; //  2022 - 8 - 6  9: 1 
console.log(yearMonthDate);

//     DD - MM - YYYY HH: mm -
let dateMonthYear = `${date} - ${month} - ${year}  ${hours}: ${min}`; //  6 - 8 - 2022  9: 1
console.log(dateMonthYear);

//     DD / MM / YYYY HH: mm
let dateMonthYear1 = `${date} / ${month} / ${year}  ${hours}: ${min}`; //  6 / 8 / 2022  9: 1
console.log(dateMonthYear1);
*/