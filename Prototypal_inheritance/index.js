let arr = ["akshay", "aditya"];
let obejct = {
  name: "akshay",
  city: "pune",
  getIntro: function () {
    console.log(this.name + "from " + this.city);
  },
};

//whenever u create a js object js engine automatically attached ur object with some hidden property and function this come via prototype

function f() {}

//whenvery you create object or function in js js enigne automatically put some hidden properties into an object and attached to your object
// to your original object  and u access that properties

//in case of array
arr.__proto__;
//it is same as
Array.prototype;
//each and every js object has prototype
//even arr.__proto__ has its own prototype
arr.__proto__.__proto__; //this give object of prototype
arr.__proto__.__proto__.__proto__; // it will print null
// object.__proto__;

//it is sort of chain
//it is called prototype chain
arr.__proto__; //it array prototype
arr.__proto__.__proto__; //it is the object prototype
arr.__proto__.__proto__.__proto; // null

//in case of object
// object.__proto__; //object prototype
// object.__proto__.__proto__; //null

//function
// fun.__proto__; //function prototype
// fun.__proto__.__proto__; //object prototype
// fun.__proto__.__proto__.__proto__; //null

//this all the protype chain it end up being null

//everything in js nothing but an object
//in case of array , object,function it is down the prototype chain end up being an object

let obejct1 = {
  name: "akshay",
  city: "pune",
  getIntro: function () {
    console.log(this.name + "from " + this.city);
  },
};

let obejct2 = {
  name: "aditya",
};

//never do this
obejct2.__proto__ = obejct1;
//this is how object to inhert from object
// object2 is inheriting properties of object1
//when we did object2.city checking inside object2 it is not present it is inheritaing from object1 just because it is set under __proto property

//when u try to access any property first of all it will check top of the main object if it doesnt find it it goes to the proto if it doesnt find inside proto it will go to proto of the proto that is how it will go throgh out the chain ie how js engine processes this properties

obejct2.getIntro();
//aditya from pune

Function.prototype.mybind = function () {
  console.log("hello mybind");
};

function fun() {}

function func1() {}

//to access it fun.__proto__.mybind()
//each and every function will access to by mybind()
