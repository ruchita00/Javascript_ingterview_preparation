//what is callback function in js

//function pass into another function is called callback function it is very powerful callback fucntion gives us the power of asynchronity

//asynchrous operation is not possible without callback

// setTimeout(function () {
//   console.log("timer");
// }, 3000);
// //example
// function x(y) {
//   console.log("x");
//   y();
// }
// x(function y() {
//   console.log("y");
// });

//click handler
document.getElementById("clickMe").addEventListener("click", function xyz() {
  console.log("hello click");
});

//event listerners
function attachEventListners() {
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("hello click", ++count);
  });
}
attachEventListners();

//garbage collection and removeeventlistners

// event listners are heavy
