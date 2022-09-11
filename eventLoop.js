const UserOne = () => {
    console.log("hello i am user one");
};
const UseTwo = () => {

    setTimeout(() => {
        console.log("I am inside the user two");
    }, 2000);

    console.log("hello i am user two");
};
const UserThree = () => {
    console.log("hello i am user three");
};

UserOne();
UseTwo();
UserThree();