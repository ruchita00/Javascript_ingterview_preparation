// let name = {
//   firstName: "Akshay",
//   lastName: "saini",
//   printFullName: function () {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
//   //this refers to name object
// };

// name.printFullName();

// let name2 = {
//   firstName: "ruchita",
//   lastName: "Sagalgile",
// };

// //function borrowing
// name.printFullName.call(name2);
// //output ruchita sagaligle

let name = {
  firstName: "Akshay",
  lastName: "saini",
  //this refers to name object
};

let printFullName = function (hometown, state) {
  console.log(`${this.firstName} ${this.lastName} from ${hometown} ${state}`);
};

let name2 = {
  firstName: "Ruchita",
  lastName: "sagalgile",
};

//in call method we can pass argument individual
printFullName.call(name2, "pune", "maharashtra");
printFullName.call(name, "himachal", "UP");

//in the apply method we are passing argument in the form of array list
printFullName.apply(name2, ["pune", "maharashtra"]);
printFullName.call(name, ["himachal", "UP"]);

//bind
//bind method instead of directly calling printfullname bind this method with object and return the copy of that method
let printMyName = printFullName.bind(name2, "pune", "maharashtra");
//it will create a copy of printfullname it will bind that to name2 object and it will return a function
//i catch it will not call directly like apply and call
//it will bind method to object and return a method
console.log(printMyName);
printMyName();

//bind method basically used to bind and keep copy of that method use it letter

const Ruchita = {
  firstName: "pinky",
  lastName: "disoja",
};

let printName = function (hometown, state) {
  console.log(`${this.firstName} ${this.lastName} from ${hometown} ${state}`);
};

const chiku = {
  firstName: "Tina",
  lastName: "hey",
};

printName.call(chiku, "pune", "maharashtra");
printName.call(Ruchita, "kochi", "kerala");

printName.apply(Ruchita, ["kochi", "kerala"]);
printName.apply(chiku, ["pune", "maharashtra"]);

let myBind = printFullName.bind(chiku, "Pune", "mahastra");
console.log(myBind);
myBind();
