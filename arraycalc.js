/* 
27. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method
    */

//array of 10 students ages
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//Sort the array and find the min and max age
const maxAges = Math.max(...ages);
const minAges = Math.min(...ages);
//console.log(maxAges);
//console.log(minAges);

//Find the median age(one middle item or two middle items divided by two)
let length = ages.length;
console.log(length);
let median;

if (length % 2 != 0) {
    median = Math.floor(length / 2);
    middleNum = ages[median];

    console.log(median);
    console.log(middleNum);
} else {
    median = Math.floor(length / 2);
    middleNum1 = ages[median - 1];
    middleNum2 = ages[median];
    console.log(middleNum1);
    console.log(middleNum2);

}


//Find the average age(all items divided by number of items)

//Find the range of the ages(max minus min)


//Compare the value of (min - average) and (max - average), use abs() method