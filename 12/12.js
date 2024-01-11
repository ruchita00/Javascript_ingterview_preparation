//asychronus

//callstack does not have timer it is not wait for anything whatevr the code i have given since the js is single threated language so it is executed line by line and end the execution but what if we want to add timer in callstack how can we do that

//callstack inside js engine and the js engine inside browser

//broswer has js engine inside it and it can also have localstorage inside it you can also have timer inside browser
//also have url https so it can access servers data and show it in the ui

//if we need to access browsers super power we need some connection between js engine and broswer

//to access all super power of browser we need web apis

//setTimeout is not part of js
//dom api is not part of js
//fetch()
//console.log is not part of js
//localstorage
//location

//so the browser gave access inside callstack to all super power inside js engine to used all the super power becuase of global object

//so global object is window

//broswer give superposwer to callstack through keyword called as window
//example
console.log("starts");

setTimeout(function cb() {
  console.log("callback");
}, 3000);

console.log("end");

//callback queue we stored expire the time of sb and event loop checks whether pushesh sb inside callstack

//as soon as the timer expire this cb pushesh u=into callback queue and cb push into callback through event loop

console.log("starts");

document.getElementById("btn").addEventListener("click", function cb() {
  console.log("callback");
  //addEventListener register callback cb() and event attached to it --registering the callback() and stay web api cb()
  //cb goes inside callback queue and event loop has job to continously monitor callstack and callback queue and event loop so the callback () goes inside callstack and quickly executed
});
console.log("end");

//fetch : goes a request a api called it return a promise it pass the function once the promise is resolved

console.log("starts");

setTimeout(function cb() {
  console.log("cb settimeouts");
}, 3000);

fetch("https://api/netflix.com").then(function cbf() {
  console.log("sb netflix");
});

console.log("end");

// microtask queue
//it has higher priority whatever the function comes inthis queue executed first cbf() will go to this queue then event loop check callstask is empty once it empty will get chance to push cbf() into callstack

//the timer function is also expired it ready to executed it will go into callback queue cb()

//now bothe of () ready to execute
//microstask queue executed into callstack
// after that cbt executed into callstack

//all the callback function which coming through promises will go inside micro task queue, mutation observer goes inside microtask queue

//starvation; happens sometime in microqueue
