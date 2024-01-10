const accountId = 144553;
let accountEmail = "ruchita@google.com";
var accountPassword = "12345";
accountCity = "jaipur";

//javascript execution context

// Everythinf in javascript happens inside an execution context
//javascript is synchronous single threated langugage
//callstack maintains the order of execution of execution contexts
//callstack also called 1.execution context stack, program stack, control stack, runtime stack, machine stack

//hoisting:

//hoisting is phenomenal js by which we can access variables and functions
// before you have initialize it without any error

getName();
console.log(x);
console.log(getName);

var x = 7;

function getName() {
  console.log("Hello Javascript");
}

console.log(getName);

//arrow function does not hoist
