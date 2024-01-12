//using callback we can pass asynchronous code

console.log("hello");

setTimeout(function () {
  console.log("js");
}, 5000);

console.log("end");

const cart = ["shoes", "phone", "jeans", "shirt"];
//create order api
//callback hell or this structure is also known as pyramid of doom
api.createOder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

//inversion of control

//inversion of control is another problem are seeing while using callbacks
//inversion of control meaning you choose the control of code while using callbacks

api.createOder(cart, function () {
  api.proceedToPayment();
});

//whenever we have callback function and we are passing into another functions  we are giving the control of our piece of code to some other function and we dont know what is happening behind seen now

// recap
//callback are supowerful functions that handling async in js
//async programming in js exit because of callback exits

//while we are writing callback we face alot of issues
// 1. callback hell : nested callback
//2.inversion of control

//whenever we have callback function and we are passing into another functions  we are giving the control of our piece of code to some other function and we dont know what is happening behind seen now
