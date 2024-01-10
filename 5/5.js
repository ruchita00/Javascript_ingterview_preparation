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
