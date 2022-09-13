/*
25. In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of you shopping cart if it has not been already added
    - remove 'Honey' if you are allergic to honey
    - modify Tea to 'Green Tea'
    */

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

//add 'Meat' in the beginning

shoppingCart.unshift('Meat');
console.log(shoppingCart);

//add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');
console.log(shoppingCart);

//remove 'Honey' if you are allergic to honey

let newShop = shoppingCart.filter(function(remove) {
    return remove != 'Honey';
});
console.log(newShop);

// - modify Tea to 'Green Tea'
let index = shoppingCart.indexOf('Tea');
//console.log(index); //3
shoppingCart.splice(index, 1, 'Green Tea'); //(index of the item tobe removed, how many item to be removed, the new item name in '')
console.log(shoppingCart);