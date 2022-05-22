const weekDays = ["Monday", "Wednesday", "Friday"];

const rectangle = { height: 20, width: 15 };

const greetMe = function (name) {
  console.log(`Hi ${name}!`);
};
greetMe("Fred");

const calculateTriangleArea = function (base, height) {
  console.log((base * height) / 2);
  return (base * height) / 2;
};

calculateTriangleArea(2, 4);

function countDown() {
  let i = 10;
  while (i >= 1) {
    console.log(i);
    i--;
  }
}
countDown();

const countEvens(end)={
  let i = 2;
  while (i >= end && end % 2===0)
  console.log(i);
  i++
}
