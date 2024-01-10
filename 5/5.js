// let & const

// let and const delcarations are hoisted

console.log(b);

let a = 10;
var b = 100;

//let and const are also allocated memory, but they are stored in different memory space than global so that you can not access this memory space before putting some value into it i.e hoisting in let.
// in debugger
//for a its showing script a:10

//  let and const is also a temporial dead zone
// temporial dead zone is a time variable was hoisted and till it is initialize some value the time between that is a temporial dead zone

//whenever you tried to access variable inside temporial dead zone it gives reference errorL cannot access a before initialization

//var is attached to window object but incase of let it will not attached to window object
// this.b and window.b

//so we observe let is bit strict than var

// reinitilization happens in var
// ex var b=100; var b=1000;
//this is possible in var

//reinitization is not happen in let it throw syntax error
// ex. let b=100; let b=1000; not possible

// const in case of const you cannot assign value letter in the program
//ex.
// const d;
// d= 1000;
// console.log(d);
//it throw syntax error

// but in  case of var you can assign value letter in the probgram
//ex
// var p;
// p = 10000;
// console.log(p);
// 10000

//const s=100;
// s=100;
// gives typeerror assignment to constant variable meaning you are assigning any other value into const variable

//if you trying to access let a before initialization it throw reference error example
//console.log(a) let a=1000;
//also when we trying to access random variable will get reference error y is notdefined
//console.log(y)
