//what is async ?
// async keyword ie used before a function to create a async function

//what if a create a promise from here

const p = new Promise(function (resolve, reject) {
  return resolve("Promise resolved value");
});

//async function always return a promise
async function getData() {
  return p;
}

// if this return value is already promise then it will not wrapped inside promise
const dataPromise = getData();

console.log(dataPromise);
//try to return a promise from here
dataPromise.then((res) => console.log(res));

//if this () does not return promise by itself it retrin a value then:it will take the value wrapped inside promise and it will return promise

const promise = new Promise(function (resolve, reject) {
  return resolve("resolve new promise");
});

async function getVal() {
  return promise;
}

const data = getVal();

data.then((res) => console.log(res));
