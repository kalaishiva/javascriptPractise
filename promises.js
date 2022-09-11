//Promise(callback, Promise constructor(then catch), async await)
//promise stages
//1. pending - resolve or reject
//2. fulfilled (resolve)
//3. reject (reject)

//how to call a constructor by using new
/*
const MakePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const arrOne = ["userOne", "userTwo", "userThree"];
        if (arrOne.length > 0) {
            resolve("Yes User found");
        } else {
            reject("No User is found");
        }

    }, 2000);
})

//console.log(MakePromise.then()); //Promise { <pending> }


//MakePromise.then().catch()
MakePromise.then((result) => {
    console.log(result);
}).catch((result) => {
    console.log(result);
});

//Homework how this output going to work
//console.log(MakePromise.then())

*/

//Async and Await

const UserOne = () => {
    return "I am UserOne";
};
const UserTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User Found");
        }, 1500);
    });
};
const UserThree = () => {
    return "I am UserThree";
};

const wait = async() => {
    let GuestOne = UserOne();
    console.log(GuestOne);

    let GuestTwo = await UserTwo(); // User Found ---is the output if it has Async and Await
    console.log(GuestTwo); //without Async and Await...its in pending form.... Promise { <pending> }

    let GuestThree = UserThree();
    console.log(GuestThree);
};

wait();