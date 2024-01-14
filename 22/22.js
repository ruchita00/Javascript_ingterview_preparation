//promise api

// 1. Promise.all;

//suppose u have to make parellel api calls and get the data for 10 users

//promise.all api is used to handle multiple promises together
//it takes array of promise as input
// Promise.all([p1, p2, p3]); // here it will take 3 promise and get the result p1 take 3s to get the result
// p2 takes 1s p3 takes 2s and all of them are success in that case output of promise all will be array result of all promise
// [val1,val2,val3] val1 comes from p1 val2 comes from p2, val3 comes from p3 the final call promise will take 3 sec to execute it will get for all api to complete
//it will collect the result and give u the result
// will give array of output [val1,val2,val3]

//what if any promises failed

// Promise.all([p1, p2, p3]);
//p1-3s
//p2-1s
//p3-2s

// after 1s pr get rejected
//as soon as any of the promises get rejected promise.all also be fail promise.all will through an error
//immediatly as soon as error happend it will return the error
//after 1s will see an error
//it will not even wait for other promises p1 and p3
//what will happend p1 and p3 this promises eventually accept or reject
//but promise.all get reject as soon as any promise get rejected

//promise.all is kind of fail fast

// 2. Promise.allSetteled([p1, p2, p3])[
//i =f all them get successful
//p1-3s
//p2-1s
//p3-2s

// after 3s [val1,val2,val3 ]

//if anyone is rejected
// p2 get reject in 1s
//this will still wait for all promises to settled

// after 3s wait for all promise to complete then after 3 s will get irrespective of success or failture
// val1, error2, val3;
// ];

//promise.settled wait to settled all promises and then will give result

// 3. Promise.race([p1,p2,p3])

//the person who will finished first will be the winner
//p1-3s
//p2-1s
//p3-2s

//after  1s it will give the value of 1st settled promise (val2)

//whatif the promise was rejected

//p1-3s
//p2-5s
//p3-2s

//p3 failed after 2 sec --- error will throgh
//it will return result of 1st settled promise

// 4.promise.any

//wait for first success

//p1-3s
//p2-1s
//p3-2s

// p2 become successful return the val2

// what if p1 get rejected this promise.any will wait for success promise
// if p2 get reject and p3 get sucess it will return the rsult from p3

//what if evrything failed
// then return result will be aggragate error and this aggragate error will be array of all 3 errors [error1,error2,error3]

//promise.race after  1s it will give the value of 1st settled promise (val2)

//it will settled the result of the first promise, if the success promise is success it will return the success if it is fail it will return the fail promise

//promise.any it will settled the first success promise

//if the first promise is fail it will wait for the  2nd promise it will keep on waiting till it getting the success promise
//it is success seeking api (seeking for first success)
//once it get the first success it will quickly get the result
//if all the promise fail it will return the aggregator error
//all the error message

//Promise.all
//promise.settled
//promise.race  it will return the first winner or settled promise
//promise.any- it will return the first success promise
//  if all fail then return the aggrator of error

//example of promise.all
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // resolve("p1 success");
    reject("p1 rejected");
  }, 3000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // resolve("p2 success");
    reject("p2 failed"); //p2 failed after 1sec
  }, 5000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // resolve("p3 success");
    reject("p3 failed"); //p3 failed after 2sec
  }, 2000);
});

//it will give result only if all the promise success or else will through error which ever the promise failed

// Promise.all([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((error) => console.error(error));

//it will wait to all the promise to settled and collect all the result then it will give you back
//it is safe

//it is give array of object

// Promise.allSettled([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((error) => console.error(error));

//   output
// (3) [{…}, {…}, {…}]0: {status: 'fulfilled', value: 'p1 success'}status: "fulfilled"value: "p1 success"[[Prototype]]: Object1: {status: 'fulfilled', value: 'p2 success'}2: {status: 'rejected', reason: 'p3 failed'}length: 3[[Prototype]]: Array(0)

//Promise.race
//whatever the first one promise it will just return a result whether it is failed or success
//error or the value of first settled promise
//settled meaning got the result
//once the promise is settled it will go to 2 state it can either (resolved,success,fullfiled) or (reject,failture,rejected)
// Promise.race([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((error) => console.error(error));

Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((error) => {
    console.error(error);
    console.log(error.errors);
  });
//after 5sec it will print 02 success
//if all of them failed it will give AggregateError of all the result
//output AggregateError: All promises were rejected
// (anonymous) @ 22.js:153
// Promise.catch (async)
// (anonymous) @ 22.js:153

//output (3) ['p1 rejected', 'p2 failed', 'p3 failed']0: "p1 rejected"1: "p2 failed"2: "p3 failed"length: 3[[Prototype]]: Array(0)
