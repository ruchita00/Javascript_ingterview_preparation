// what is closure in js
// a function along with reference to its outer env together forms a closure in other words closure is combination of function and its lexical scope bundle to gether form a closure

// each and every function and variable access of outer lexical env
//even when the function executed in other scope not its original scope
// it still remebers its outer lexcial env where it was originaly present in the code

//example

function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
outer()();
// this is for calling the inner function in the same line
//or var close =outer() close() you can do like this also

//modify

function outer() {
  function inner() {
    console.log(a);
  }
  var a = 10;
  return inner;
}
outer()();

//it will still form a closure

function outer() {
  function inner() {
    console.log(a);
  }
  let a = 10;
  return inner;
}
outer()();

//it will still form a closure

function outer(b) {
  function inner() {
    console.log(a, b);
  }
  let a = 10;
  return inner;
}
var close = outer("hello");
close();

//it will still form a closure it work same print a, b value
function outest() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}
var close = outest()("hello");
close();

//it will still form a closure it work same print a, b,c value

function outest() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    // let a = 10;
    return inner;
  }
  return outer;
}
let a = 100;
var close = outest()("hello");
close();

//advantage of closure

//uses of closure
//module design pattern
//curring
//functions like once
//memoize
//maintaining state in async world
//iterators
//settimeouts
//and many more
//closure is used in data hiding and encapsulation

// data hiding : suppose we have variable we want to data privacy over it meaning other function cannot access that data that is known as data hiding or we can encapsulate that data so other function cannot access it

//example
function counter() {
  var count = 0;
  function incrementCounter() {
    count++;
  }
}

var counter1 = counter();
counter1();
console.log(count);
