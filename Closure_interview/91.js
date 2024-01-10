//we can create closure with constructor function also below example
// function Counter() {
//   var count = 0;
//   this.incrementCounter = function () {
//     count++;
//     console.log(count);
//   };
//   this.decrementCounter = function () {
//     count--;
//     console.log(count);
//   };
// }
// var counte1 = new Counter();
// counte1.incrementCounter();

//disadvantage of closure
//overconsumtion of memory because those variables are not garbage collected till th eprogram expire
//if the closure is not handling properly then also memory leak it can also freeze the browser

//what is garbage collector
//this is js program which freeze unutilize memory

//how the closure and garbadge collector related to each other

// function a() {
//   var a = 0;
//   return function b() {
//     console.log(a);
//   };
// }

// var y = a();
// y();

//we cannot free the memory of variable a until we know that we no longer need variable a but in this case var b is copy of it form closure so this memory is not free its not garbadege collector

//smartly collected garbage collection is

function x() {
  var a = 0,
    z = 10;
  return function b() {
    console.log(a);
  };
}

var y = x();
y();

//in above example z is garbage collected
