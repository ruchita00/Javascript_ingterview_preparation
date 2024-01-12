//higher order functions

// a function takes another function as arguments or return a function from it is known as higher order function

//exmaple
function x() {
  console.log("hello");
}

function y(x) {
  x();
}

//here y() takes x() as argment is known as higher order function

// x is the callback function and yis the hod

//calculate the area of 4 circle

const radius = [3, 1, 2, 4];

//our impletation of map
// const calculate = function (radius, logic) {
//   let output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };

//array.protype which means this fucntion will be avaialble all the array
Array.prototype.calculate = function (logic) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

const area = function (radius) {
  return Math.PI * radius * radius;
};

console.log(radius.map(area));
console.log(radius.calculate(area));

//this is kind of polyfill for map

// const circumferenceCirle = function (radius) {
//   return 2 * Math.PI * radius;
// };

// const diameterCirle = function (radius) {
//   return 2 * radius;
// };

// //map function also just created a new array iterate each of this element in the radius and return the output

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumferenceCirle));
// console.log(calculate(radius, diameterCirle));

//reuse code
//reusablility
//modularity

//calculate() is higher order function

//area is callback function pass inside calcalute function

//write a polyfill for map

Array.prototype.calcalute = function (logic) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

const areaa = function (radius) {
  return Math.PI * radius * radius;
};

console.log(radius.map(areaa));
console.log(radius.calcalute(areaa));

//recap

//a function which takes another function as input to itself or return a function from itself which is known as higher order function

//a fucntion which pass into higher order function as argument which is known as callback funtion which is called sometime else in the program this is only possible because function first class citizen in js

//functional programming in a small part
//polyfills
