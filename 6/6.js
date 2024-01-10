// block in js
// block is also known as compound statement
// {
//   //compound statement
//   var a = 10;
//   console.log(a);
// }
//block scope
// why we need to group this statement together
//we are grouping this statement togther so that we are used multiple statements in a place where js expect only 1 statement

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);
//got reference error b is not defined

//let and const are the block scope they are stored in seperate memory space which is reserve for this block so that you can not access let and const outside the block scope where as var you can assign outside the block scope

//what is shadowing in javascript
// if you have  same name variable outside the block so block scope variable shadows outside variable
// var a = 100;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
//output:10 20 30

// var a = 100;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
//output:10 20 30 10

// let b = 100;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(b);

// block
// b:20
//c:30

// script
//b:100

// const c = 100;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(c);
// output: 10 20 30 100

//if we have function scope the shadow behaving the similar way
const c = 100;
function x() {
  const c = 30;
  console.log(c);
}
x();
console.log(c);
//30 100

//illigal shadowing

// let a = 20;
// {
//   var a = 20;
// }
//you cannot do this  using block scope var

//let a=20;
// {
//   let a = 20;
// }
//this is valid

//var a=20;
// {
//   let a = 20;
// }

//this is valid

//block scope also follows lexical scope
// example
const a = 20;
{
  const a = 100;
  {
    const a = 200;
    console.log(a);
  }
}
