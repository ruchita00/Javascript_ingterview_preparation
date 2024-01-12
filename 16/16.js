//map,reduce,filter

///map reduce filters are higher order function in js

//map function also just created a new array iterate each of this element in the radius and return the output

const arr = [5, 1, 3, 2, 6];

function double(x) {
  return 2 * x;
}

function triple(x) {
  return 3 * x;
}

function binary(x) {
  return x.toString(2);
}

const output = arr.map(double);
// const output = arr.map(function double(x) {
//   return 2 * x;
// });

const outputa = arr.map((x) => {
  return x.toString(2);
});

const tri = arr.map(triple);
const binar = arr.map(binary);

console.log(output);
console.log(tri);
console.log(binar);

const arra = [5, 1, 3, 2, 6];

//filter odd value inside arr

const outputfilter = arra.filter((odd) => odd % 2);
const evenFilter = arra.filter((even) => even % 2 == 0);
const gratherthanfour = arr.filter((gratherthan) => gratherthan > 4);

console.log(outputfilter);
console.log(evenFilter);
console.log(gratherthanfour);

//reduce:
//find sum of all the array, max no

function findaSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(findaSum(arr));
//acc- is iterating each element over array
//current resp value of curr value

const outputReduce = arr.reduce(function (accumlator, current) {
  accumlator = accumlator + current;
  return accumlator;
}, 0);

console.log(outputReduce);

//max value

function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax(arr));

const findMaxValue = arr.reduce(function (max, current) {
  if (current > max) {
    max = current;
  }
  return max;
}, 0);

console.log(findMaxValue);

