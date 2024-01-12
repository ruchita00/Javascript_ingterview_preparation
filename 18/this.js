//this keyword
"use strict";

//this is global space
console.log(this);
//this keyword in global space represent the global object
//in case of browser the global object is window

//what is the value of this inside global space it can be global object that can be different it can window it can be global it depends upon where you are running that piece of code

//this inside a function
function x() {
  //the value dependes on strict /non strict mode
  console.log(this);
}

x();

//this keywords works differently in strict mode and nonstrict mode

//if  you are inside the function the it depends on the value strict and non strict mode
//in strict mode value of this is undefined and non strict mode the value of this is window

//this is strict mode (this substitution):

//suppose if the value of this keyword is undefined or null then this keyword will be replaced will globalObject
//only in non strict mode

//what is the value of this keyword inside a function

//the value of this keyword inside a function is undefined but because js something known as this substitution so the the value becames globalObject if we not used strict mode
//this inside non strict mode - (this substitution)

//this keywords value depends on how this is called (window)

//if the function is called without any reference the value is undefined
x();

//if the function is called with any reference object then it is
//globalObject;
window.x();

//this key word value depends on how the function is called

//this inside a object's method

//if you will make a function as object it is known as method

const obj = {
  s: 10,
  x: function () {
    console.log(this); //value of this is current object s:10,x:f
  },
};

obj.x();
// value of x method is the object where the method is present
// x is the method of object obj

//call apply bind method(sharing methods)

//when you have to share method that time call apply bind method is used

const student = {
  name: "akshay",
  printName: function () {
    console.log(this.name);
  },
};

student.printName();

const student2 = {
  name: "deepika",
};

//student has method i want to reuse method for student2

//example of call
student.printName.call(student2);
//i am trying to override the value of this.name akshay to deepika

//call apply bind method used to set the value

//how does this keyword behave inside arrow function
//arrow function do not have thier own thiskeyword
// they take the value of there lexical env where there are enclosed.

//enclosing lexical context

const object = {
  a: 10,
  x: () => {
    console.log(this);
  },
};

object.x();
// this object is lexically present it is presnt in global space
//so this keyword is not behave inside a function but it behvae like it presnt in the global space
//the value will be window object

const objruchi = {
  a: 10,
  x: function () {
    console.log(this); //this keyowrd reference to current objec a and x() ; this is how this arrow function behaves the same
    const y = () => {
      console.log(this);
    };
    y();
  },
};

objruchi.x();

//whenever u see an arrow function the value of this keyword will be where the arrow function is lexically enclosed

//whenever u see an arrow function the value of lexical scope will be where the arrow fucntion is lexically enclosed

//arrow functions dont provide their own this biniding
//it retains the this value of the enclosing context

//what is this inside dom element

//the value to reference to html element
//<!-- it says obect html button element  : the button itself the value of this-->

// this inside dom element give reference to html element

//this inside class, constructor and

const people = {
  name: "ruchi",
  printName: function () {
    console.log(this.name);
  },
};

const peoplesame = {
  name: "linaa",
};

people.printName.call(peoplesame);
