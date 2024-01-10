// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//   var x = 10;
//   console.log(x);
// }

// function b() {
//   var x = 100;
//   console.log(x);
// }

// output: 10;
// 100;
// 1;

//whenever you created a execution context this is created along with it
//even for the functional execution context
//at the global level this points to global object
//that is the window of broswer
// this=== window
// output is true

//global space meaning  any code you write in js which is not inside any function
//whenever you creating any var and function at global level its attach to window or
//it will present inside thr window

var a = 10;
function b() {
  var x = 10;
}
console.log(window.a);
console.log(a);

// console.log(x);

//at the global level this points to global object

console.log(this.a);
//10
