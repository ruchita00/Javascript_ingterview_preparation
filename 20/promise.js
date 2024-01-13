//promises
//promises are used to handle async operation in js

// const cart = ["shoes", "pant", "shirt"];

// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId); //orderId
// });

//we are creating createorder api in such way it will no longer take callback fucntion it will take only cart details and it will return us a promise we will capture that promise into promise variable

// const promise = createOrder(cart);

//{data:undefined}

//promise is nothing but an empty object with same data value in it.

//data value will hold whenever this createorder will retrun to us

//createorder api is async operation so we dont know how much time it will take

//but as soon as the line 12 is executed this will return us a object
//  or will createorderapi will return some promise with a data with same empty value

//and suppose after 5 sec it  and it will filled this object with details of cart

//this promise object filled data automatically this is what promise.

//then is avaialble over promise

//{data:orderDetails}
//once the data automatically into object the proceedto payment api automatically called
// promise.then(function () {
//   proceedToPayment(orderId); //orderId
// });

//it is basically api which is given by browser to us to make external call
//fetch() return us promise
// fetch();

const GITHUB_API = "https://api.github.com/users/akshaymarch7";

const user = fetch(GITHUB_API);
//AS SOON AS the line is executed we will get the promise object inside user

//state of promise and result
//whatever data will store inside promiseresult
//and promise state tells you what state the promise is
//initially the promise is in pending state once the data got back the promise state chnages to fullfill state

console.log(user);
//attached callback to promise
user.then(function (data) {
  console.log(data);
});

const usear = fetch(GITHUB_API);

usear.then(function (data) {
  console.log(data);
});

//promise object only resolved once
//its immutable data

//what is promise
//promise object is placeholder certain period of time until we received value from async operation

//conatiner for a future value

//promise is an obejct representing the eventual completion or failure of an async operation

//promise comes with impoertant feture of promise chaining which is used to solved callback hell issue

const cart = ["shoes", "pant", "shirt"];

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfor) {
    showOrderSummary(paymentInfor, function () {
      updateWalletBalance();
    });
  });
});

//promise chain
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfor) {
    return updateWalletBalance(paymentInfor);
  });

//we are always return promise from when we are chaining it

//recap
//how we acan handle async code using callbacks
// major issue in it inversion of control we are passing fucntion into another function to control our function and we have chance to lossing our data
//how we solved this issue we basically have promise object
//promise object is represnting eventually failture or complations of async operation
//in the promise we dont pass function inside another function
//we attached callback function to that promise object whenever the promise is resloved  the callback () is automatically called by promise function
//promise gives us guranatee and trust by whole transcation
//becuase promise resolved by once only
//there are 3 state of promises either pending, fullfill, rejected
//you can pass promise whenver u want to without caring the mutability of it, because promise is immutable you can not alter promise if it is resolved
//promise have 2 properly
//promise state:
//promiseResult:which used to hold data, which eventually gets filled

//what is promise
//promise object is placeholder certain period of time until we received value from async operation

//conatiner for a future value

//promise is an obejct representing the eventual completion or failure of an async operation

//one more issue using callback : callback hell
//we used promise chaining to handle that issue
//used then to attched lot of callback handlers

// Promise is an object represnting the eventually compilation or failure of async operation.
// Advantages of promise:
// 1.promises give us guarantee and trust whole transaction because promise resolved once
// 2.promise also solve the issue of inversion fo control
// 3.we can pass promise whenever we want without caring the mutability of it because promises is immutable
// 4.promise also can solve the issue callback hell using promise chaining
// 5.promise can also attached a lot of callback hanlders using then
