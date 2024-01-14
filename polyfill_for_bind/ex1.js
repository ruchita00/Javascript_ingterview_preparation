//polyfill for bind

let name = { firstName: "Ruchita", lastName: "Sagalgile" };

let FullName = function (hometown, state, counrty) {
  console.log(
    `${this.firstName} ${this.lastName} ${hometown} ${state} ${counrty}`
  );
};

let myName = FullName.bind(name, "Jalgoan", "UP");
myName("India");

Function.prototype.myBind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args1) {
    obj.apply(args[0], [...params, ...args1]);
  };
};

let myNewName = FullName.myBind(name, "surat", "Gujrat");
myNewName("India");


