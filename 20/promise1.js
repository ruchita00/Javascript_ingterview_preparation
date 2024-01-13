// const cart = ["shoes", "pants", "kurta"];

// const promise = createOrder(cart);
// console.log(promise);

// promise
//   .then((orderId) => {
//     console.log(orderId);
//     //   proceedToPayment(orderId);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

// //producer

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     //createorder
//     //validateCart
//     //orderId
//     if (!validateCart(cart)) {
//       const err = new Error("Cart is not valid");
//       reject(err);
//     }
//     //logic for createOrder
//     const orderId = "12345";
//     if (orderId) {
//       setTimeout(() => {
//         resolve(orderId);
//       }, 3000);
//     }
//   });
//   return pr;
// }

// function validateCart(cart) {
//   return true;
// }
//promise can only have 2 thing either resolved or rejected

//recap
//we are create a createOrder api once you called this api it will create a promise and return it
//we get this cart item we can either reject the promise or we can accept the promise
//we are doing own check if the cart is validated and we cAN resolved the promise with order id

//we are created promise now we are consuming the promise

//this create order function create a promise object and promise object attached with this function so what happen is it just return a promise
//and then js called this function createOrder() and create a promise and because of cart items are validated and success so it just resolved this promise once promise resolved the data passed it get the  into the callback function so we just log order orderid we get the orderid

const cart = ["shoes", "pant", "jeans"];

// const promise = createOrder(cart);
// console.log(promise);

//promise chaining
createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    //proceed to payment
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch((erro) => {
    console.log(erro.message);
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const error = new Error("cart is not valid");
      reject(error);
    }
    const orderId = "1234";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 3000);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  //logic for proceedto payment
  return new Promise(function (resolve, reject) {
    resolve("payment is successful");
  });
}

function validateCart(cart) {
  return true;
}

//recap
//how we can create promise
//function we can pass inside promise contructor it takes 2 pare resolved and reject
//this resolved and reject are given by js with this we have control over js wherther we wanttp reject it or resolve it
//we cannot called reslove twice

//you are attaching failure callback () using catch to our promise object
//every down the chain we retrun a return keyowrd whatever u return from this then you will return to next part of chain

//catch will all the error in the promise chain
