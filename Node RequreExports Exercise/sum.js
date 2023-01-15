// const { sum } = require("lodash");

// const sumNumbers = (numbers) => {
//   let sum = 0;
//   numbers.forEach((element) => {
//     sum += element;
//   });
//   return sum;
// };

// module.exports = { sumNumbers };

let sum = 0;
numbers.forEach((number) => {
  sum += number;
});
return sum;

module.exports = calcSum;
