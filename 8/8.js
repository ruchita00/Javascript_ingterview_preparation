// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
//   console.log("hello js");
// }
// x();

// function y() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("hello js");
// }
// y();

// each and every time this settime out function refering to different memory location which is their individual of i or seperate copy of i also why it is working with let why it is not working with var because let is block scope and its create a new copy every time this loop is executed

//it was not working with var because the copy of i refer to the same meemory location so same how we have to give new copy every time to set timeout and form a closure with it.

function a() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
  console.log("hello ");
}
a();

//now using close function we created a new copy of i everytime when the settimeout is called so the everytime settimeout stored i in seperate memory attached the timer stored it remembers the new copy of i.
//so every time the close function is called having new copy of i in it
