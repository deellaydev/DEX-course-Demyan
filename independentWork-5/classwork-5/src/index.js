
// console.log("Preparing data...")

// setTimeout(() => {
//   console.log("Request...");
//   const responseData = {
//     server: "aws",
//     port: 8081,
//     status: "working",
//     modified: false
//   }
// setTimeout(() => {
//   responseData.modified = true;
//   console.log("Data received...", responseData);
// },2000);
// },2000);

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Request...");
//     const responseData = {
//       server: "aws",
//       port: 8081,
//       status: "working",
//       modified: false
//     }
//     resolve(responseData);
//   }, 2000)
// })
// promise.then((data) => {
//   setTimeout(() => {
//     data.modified = true;
//     console.log("Data received...", data);
//   },2000);
// }).catch((e) => {
//   console.error(e)
// });

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

// delay(3000).then(() => console.log("3 s"))

// Promise.all([delay(3000), delay(5000)]).then()

// const url = "https://jsonplaceholder.typicode.com/todos";

// const fetchData = () => {
//   return delay(2000)
//     .then(() => fetch(url))
//     .then((data) => data.json());
// };

// fetchData().then((data) => console.log(data));

// async function fetchDataAsync(){
//   try{
//     await delay(3000);

//     let responce = await fetch(url);
//     let data = await responce.json();

//     return data;
//   }
//   catch(e){
//     console.log(e)
//   }
// };

// fetchDataAsync().then((data) => console.log(data))


const requestURl = "https://jsonplaceholder.typicode.com/users";

let user = {
  name: 'Oleg',
  age: 25
}

const getUsers = (method, url) => {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then((data) => data.json())
}

getUsers("POST", requestURl).then((data) => console.log(data))

