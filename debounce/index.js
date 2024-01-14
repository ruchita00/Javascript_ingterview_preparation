//debounce in js

let counter = 0;

const getData = () => {
  //cals an api to gets data
  console.log("Fetching data..", counter++);
};

const dobounce = function (fun, delay) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, delay);
  };
};
const betterFunction = dobounce(getData, 300);
