//polyfill
//polyfill is sort of browser callback

//this is simple bind method
let name = { firstName: "Akshay", lastName: "saini" };

let printName = function (hometown, state, country) {
  console.log(
    `${this.firstName} ${this.lastName} ${hometown} ${state} ${country}`
  );
};

let printMyName = printName.bind(name, "pune");
printMyName("maharashtra", "India");

//TASK TO CREATE OUR own bind method
Function.prototype.myBind = function (...args) {
  //this-- printName
  //args-- args gave reference of name object
  //extracting params
  params = args.slice(1);
  //will remove 1st element of list will return all remaining element
  //since params form array so we used apply method
  let obj = this;
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

//evry function in js has access to bind method
//EVERY FUNCTION should have access to mybind mthod
//how can we do that we can put this mybind() into function prototype
//if we keeep any method in function.prototype each and evry method we right has access to those method

//whenevery we write printName.bind so printMyName get a fucntion which letter invoked so we want similar behavior with our bind method
//when we call printName.myBind it will also return function to us
//if we call printMyName2() then printName will execute
let printMyName2 = printName.myBind(name, "pune");
printMyName2("maharashtra", "India");


