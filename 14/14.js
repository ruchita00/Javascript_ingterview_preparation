//settimeout have trust issue

//settimeout is 5ms does not actually wait for 5ms their are trust issue

//settimeout does not give gaurantee that it will wait for 5 sec, it takes 5 or 7 it depends on callstack
console.log("start");
setTimeout(function cb() {
  console.log("callback");
}, 5000);

console.log("End");

//first start is executed
//when it move to settimeout it actually registed  this callback method into web api, and timer is started wating for executed when the timerend but js does notwait for anything
//js moves to next line end end is printed to console

//suppose we had 1 million line of code which take a lot of time taken , 10 sec to run to execute, in this  case global execution context still be busy  executing this code while the timer is running, so the global execution context wont go out it will wait 10 sec toexecute the code, but the timer is running for 5 sec while the main thread global execution context busy in executing code, in this case the cb() is already expired long back and it push into callback queue now event loop is constantly checking the callstack is empty or not if the callstack is wmpty then only the cb() push into call stack
// , but in this synorio global execution context does not move out for 10 sec and 5sec expired then what will happens when cb() get execute ans is after 10 sec

//cb() will wait the global execution context to move out from the call stack then cb(0 will executed ) that is known as concurrency model in js

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate <= startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("while expires ");

console.log("start");
setTimeout(function cb() {
  console.log("callback");
}, 0);

console.log("End");
//start end callback
