// createOrder, proceedToPayment, showOrderSummary, updateWallet;

const cart = ["shoes", "pant", "shirt"];

const promise = createOder(cart);

promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentinfo) {
    return showOrderSummary(paymentinfo);
  })
  .then(function (paymentinfo) {
    updateWallet(paymentinfo);
  })
  .catch((error) => {
    console.log(error.message);
  });

function createOder() {
  const pr = new Promise(function (resolve, reject) {
    if (!validatCart(cart)) {
      const error = new Error("Cart is not valid");
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
  const pr = new Promise(function (resolve, reject) {
    if (!notpaymentsuccessfull) {
      const error = new Error("payment is failed");
      reject(error);
    }
    setTimeout(() => {
      resolve("payment successfull");
    }, 5000);
  });
  return pr;
}

function notpaymentsuccessfull() {
  return true;
}

function showOrderSummary() {
  return new Promise(function (resolve, reject) {
    resolve("short");
  });
}

function updateWallet(orderId) {
  const pr = new Promise(function (resolve, reject) {
    if (!notpaymentsuccessfull) {
      const error = new Error("payment is failed");
      reject(error);
    }
    setTimeout(() => {
      resolve("payment successfull");
    }, 5000);
  });
  return pr;
}

function validatCart(cart) {
  return true;
}
