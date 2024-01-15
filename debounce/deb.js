let counetr = 0;

const getData = function () {
  console.log("fetching data", counter++);
};

let debounce = function (delay) {
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

let betterFunction = debounce(getData, 300);
