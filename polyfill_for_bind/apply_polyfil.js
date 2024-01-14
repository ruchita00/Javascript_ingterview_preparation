let name = { firtsName: "Ruchita", lastName: "s" };

let printName1 = function (city, country) {
  console.log(`${this.firtsName} ${this.lastName} ${city} - ${country}`);
};

printName1.call(name, "palia", "India");

// create a polyfill for call

Function.prototype.myCall = function (context, ...args) {
  context.myFn = this;
  context.myFn(...args);
};

printName1.myCall(printName1, "palia", "India");
