// (first value- inclusive) and (last value-exclusive)


//Slice --like cutting a cake
var users = ["kalai", "vani", "Shivani", "Shiva", "Ragu"];

console.log(users.slice(2, 3)); //[ 'Shivani' ]
console.log(users.slice(1, 3)); //[ 'vani', 'Shivani' ]


//Splice -- remove the index position and replace with the value which we send.
users.splice(1, 2, "Hi"); //1, 2 index position remove vani and shivani - add Hi
console.log(users); //[ 'kalai', 'Hi', 'Shiva', 'Ragu' ]