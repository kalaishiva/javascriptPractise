//Promise(callback, Promise constructor(then catch), async await)
//promise stages
//1. pending - resolve or reject
//2. fulfilled (resolve)
//3. reject (reject)

//how to call a constructor by using new

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

MakePromise.then((result) => {
    console.log(result);
});