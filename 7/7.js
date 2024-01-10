// closure

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();
//closure is a function bind together with its lexical env
// or  function along with its lexial scope form a closure known as closure
// example inside y it form a closure with the variable which were part of x lexical scope or the function y was bind to variable x it form closure it has access to parent lexical scope

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// var z = x();
// console.log(z);
// z();

// function along with lexical scope form a closure known as closure

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// x();
// var z = x();
// console.log(z);
// z();

//2nd exmaple
function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();
// closure a:7 close b:900

//uses of closure
//module design pattern
//curring
//functions like once
//memoize
//maintaining state in async world
//iterators
//settimeouts
//and many more
