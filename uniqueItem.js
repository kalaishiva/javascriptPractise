//35. Write a functions which checks if all items are unique in the array.

let items = [1, 2, 3, 4, 1, 5, 6, 2, 'kalai', 'shiva', 'shivani', 'kalai'];

/*
The constructor of Set takes an iterable object, like an Array, 
and the spread operator ... transform the set back into an Array. 
*/

let uniqueItems = [...new Set(items)];
console.log(uniqueItems);