//
// const cowsay = require("cowsay");
const { shuffle } = require("lodash");
const { calcSum } = require("./sum.js");
const { numbers, name, hometown } = require("./data.js");

console.log(numbers);
console.log(`${data.name} is from ${data.hometown}.`);
console.log(sum(data.numbers));

// console.log(
//   cowsay.say({
//     text: "Hello World",
//   }));

console.log(shuffle(numbers));
