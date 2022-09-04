//array
let countries = ["India", "China", "Japan", "Russia"];
console.log(countries);

let states = new Array("Rajasthan", "Delhi", "Assam", "Tamilnadu");
console.log(states);

//1. Access the array
console.log(states[2]); //Assam

//2. length
console.log(states.length); //4

//3. Replace
states[1] = "Karnataka"; //[ 'Rajasthan', 'Karnataka', 'Assam', 'Tamilnadu' ]
console.log(states);

//4. Remove the last value
console.log(countries.pop()); //remove Russia from the last value
console.log(countries); //[ 'India', 'China', 'Japan' ]

//5. Add value at front
console.log(countries.unshift("Germany")); // 'Germany', 'India', 'China', 'Japan' ]
console.log(countries);

//6. Remove value at front
console.log(countries.shift()); //[ 'India', 'China', 'Japan' ]
console.log(countries);


//7. Find the index of a particular value
console.log(countries.indexOf("China")); //1

//8. Find the index of a value which is not present the array
console.log(countries.indexOf("Korea")); // -1

//9. string into array
let change = Array.from("Kalai"); //[ 'K', 'a', 'l', 'a', 'i' ]
console.log(change);

change[0] = "S";
console.log(change); //['S', 'a', 'l', 'a', 'i']