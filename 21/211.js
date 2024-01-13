//FETCH
//fetch gives u a promise
//fetch returns a response
//fetch function basically a promise once the promise is resolved it will give u a response object
//reponse object has body which is readable stream
//readable stream want to read then put res.json()
//it is also another promise and when the promise is resolved it will give you the result or value

const API_URL = `https://api.github.com/users/ruchita00`;
async function handleUsers() {
  try {
    const fetchData = await fetch(API_URL);
    const dataConvertor = await fetchData.json();
    console.log(dataConvertor);
  } catch (error) {
    console.log(error);
  }
}

handleUsers();

//what is async await
//async is keyword which is used with function
//await can be used only inside async function  to handle promises
//this promises are asynchronous
