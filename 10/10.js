//what is annonymous function
//a function without name is annonymous function

a();
// b();
//function statements also function declaration
function a() {
  console.log("a called");
}

//function acts like a value

//function expression
var b = function () {
  console.log("b called");
};
b();

//what is the difference between function statements and function expression
//is hoisting

//annonymous function
// function (){

// }
//annonymous does not have own identity
//annonymous function are used in a placed functions are used as values meaning you can assign function to variable
var s = function () {};

xy();

//Named function expression
var b = function xy() {
  console.log("b called");
};

//diffrence between parameters and arguments
var b = function (params) {
  console.log("b called");
};
b(argument);

//what are first class function ?
//ability to used function as value known as first class function, can be pass argumnet into another function , can be return out of another function  this ability known as first class function

//function are first class citizen

//we can pass function inside function as an arguments, function are treated as value

var b = function (params) {
  console.log(params);
};

b(function () {});

//we can also return function from a function also return a named function

var b = function (params) {
  return function () {};
};

console.log(b());

var b = function ax(params) {
  return function () {};
};

console.log(b());
