//30. Write a script which generates a random hexadecimal number. eg: #484891

let letters = "0123456789ABCDEF".split("");
let color = "#";

for (let index = 0; index < 6; index++) {
    color = color + letters[Math.floor(Math.random() * 16)];
    console.log(color);

}