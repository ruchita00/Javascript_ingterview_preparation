const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "dolnad", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 },
];

//list of full names

const fullName = users.map((name) => `${name.firstName} ${name.lastName}`);

console.log(fullName);

//find out how many people 26

const findVal = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(findVal);

//firstname of all the people whos age is less than 30
const final = users.filter((x) => x.age < 30).map((x) => x.firstName);
console.log(final);

//find all the people with age less than 30 let the list of firstname
//using reduce

const finalv = users.reduce(function (acc, user) {
  if (user.age < 30) {
    acc.push(user.firstName);
  }
  return acc;
}, []);
console.log(finalv);

const finalRed = users.reduce(function (acc, user) {
  if (user.age < 30) {
    acc.push(user.firstName);
  }
  return acc;
}, []);

console.log(finalRed);
