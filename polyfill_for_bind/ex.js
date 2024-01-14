let name = { firstName: "Ruchita", lastName: "Sagalgile" };
let FullName = function (hometown, state, country) {
  console.log(
    `${this.firstName} ${this.lastName} ${hometown} ${state} ${country}`
  );
};

let myName = FullName.bind(name, "pune");
myName("maharshtra", "India");

Function.prototype.myBind = function (...args) {
  let obj = this;
  params = args.slice(1);

  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let orgName = FullName.myBind(name, "pune");
orgName("maharshtra", "India");
