//function currying using bind method
let multiple = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiple.bind(this, 2, 4);
let multiplyByThree = multiple.bind(this, 3);
multiplyByTwo();
multiplyByThree(7);

//this is function currying

//function currying using closure

let mutiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let mul = mutiply(2);

mul(5);

// currying is a technique in JavaScript that allows you to transform functions with multiple arguments into a sequence of functions, each taking one argument at a time. It promotes code reusability, composability, and flexibility.9 May 2023
