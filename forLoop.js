//28. Use for loop to iterate from 0 to 100 and print only prime numbers

for (let index = 0; index <= 100; index++) {
    if (index % 2 === 0 || index % 3 === 0 || index % 5 === 0 || index % 7 === 0) {
        console.log(`${index} Not a prime Number`);
    } else {
        console.log(`${index} Prime number`);
    }


}


//29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
/*
let prevSum = 0;
let evenSum = 0;
let oddSum = 0;

for (let index = 0; index <= 100; index++) {
    if (index % 2 === 0) {
        prevSum = evenSum;
        evenSum = evenSum + index;

        console.log(`${prevSum} + ${index} = ${evenSum}`);
    } else {
        prevSum = oddSum;
        oddSum = oddSum + index;
        console.log(`${prevSum} + ${index} = ${oddSum}`);

    }

}
*/