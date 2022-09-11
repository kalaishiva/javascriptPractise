//class theory.

// class User {
//     talk() {
//         console.log("");
//     }
// }

// // let person1 = new User();
// // let person2 = new User();

//Class 


// class User {
//     constructor(firstName = "Hello", lastName = "guys", email = "abc@gmail.com", password = "123") {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.password = password;

//     }

//     getFullName() {
//         const fullName = this.firstName + " " + this.lastName;
//         return fullName;
//     }
// }

// //create user1
// let user1 = new User("Kalaivani", "Sivakumar");
// console.log(user1); //User { firstName: 'Kalaivani', lastName: 'Sivakumar' }
// console.log(user1.getFullName()); //Kalaivani Sivakumar

// //create user2
// let user2 = new User("Raguvaran", "Sundarapandiyan", "ragussn@gmail.com", "123456");
// console.log(user2); //User { firstName: 'Raguvaran', lastName: 'Sundarapandiyan', email: 'ragussn@gmail.com', password: '123456'}

// //create user3
// let user3 = new User();
// console.log(user3); //it gives the default value which we set
// //User {firstName: 'Hello',lastName: 'guys', email: 'abc@gmail.com', password: '123'}

// //need to refer
// //create user4...if we need to pass only the password, keep the remaing fistname , lastname, email as empty
// let user4 = new User(, , ,"12");
// console.log(user4);

//Getter and Setter
//getter--it get the value

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.score = 0;

    }

    getFullName() {
        const fullName = this.firstName + " " + this.lastName;
        return fullName;
    }

    get getFirstName() {
        return this.firstName;
    }
    get getLastName() {
        return this.lastName;
    }

    set setScore(score) {
        this.score = score;
    }
    get getScore() {
        return this.score;
    }
}

let user1 = new User("Javascript", "WebDeveloper");
console.log(user1.getFirstName); //Javascript
console.log(user1.getLastName); //WebDeveloper

user1.setScore = 7;
console.log(user1.getScore);

//setter-- it set the value


//inheritance

class UserOne {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.score = 0;

    }
    getFullName() {
        const fullName = this.firstName + " " + this.lastName;
        return fullName;
    }
}

class UserTwo extends UserOne {

}