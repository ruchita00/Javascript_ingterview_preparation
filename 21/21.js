//async await combo is used to handle promises

//but before async await how we handle promises and why do we need to used async await

// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("promise resolve");
//   }, 3000);
// });

// function getData() {
//   p.then((res) => console.log(res));
// }
// getData();

//how do we handle this thing using async await

//create async function
//we can use keyword await before promise that has to be resolved
//this p is promise
//val contain the value of promise

// async function handlePromise() {
//   const val = await p;
//   console.log(val);
// }

// handlePromise();

//await :
//await is a keyword that can only be used inside an async function
//you write this await keyword infront of promise
//it will resolved promise

//example with normal then function
// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("promise resolve");
//   }, 3000);
// });

// function getData() {
//   //js engine will not wait for promise to resolved
//   p.then((res) => console.log(res));
//   console.log("hello js");
// }

// getData();

//with async await
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("promise resolve");
  }, 5000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("hello promise resolve new 22");
  }, 10000);
});

async function handlePromise() {
  //js engine will not wait for promise to resolved
  console.log("helllo world");
  const val = await p1;
  console.log("hello js");
  console.log(val);

  const val1 = await p2;
  console.log("hello 2nd");
  console.log(val1);
}

handlePromise();

//basically js engine was waiting for promise to resolved at line 59 once the promise is resolve it will only go to line 60 once the promise is resolved

//when we reverse the order thr behavior changes automatically
//example 2nd promise is 5sec and 1st is 10sec so it will print the both the promise after 10sec

//but if the order is same and 1st is 5sec and 2nd is 10 sec then the order should remain same

//callstack
//now callstack is empty
//AS SOON as the handlePromise() is called  it see their are 2 promises which need to be resolved
//and this promise are taking their own time resolution

//p1, p2
//this handlepromise() will come into ur callstack
//becuase js is single threaded lang  it start executing line by line
//it will execyte the console.log(hello world)
//after that it will see there is await here in the p1 .the handle promise execution is suspend and this will move out of call stack

//once thep1 is resolve then it will move ahead
//p1 will resolve after 5 sec

//after 5 sec callback become empty and handleprmise() again come into callstack
//this time start executing from where it left
//it will log the   this value console.log("hello js");  console.log(val);
//then it will reached to line 70 so the p2 is not yet resolved p2 should resolve  after 10 sec
//it willl again suspend the execution it will move out of callstack
// then the callstack is free
//after 10 sec p2 executted then handleprmise is again come into callstack and it start executiing from where it left. then it will executed   console.log("hello 2nd"); console.log(val1);
