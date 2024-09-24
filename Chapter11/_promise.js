//create promise
const promise = new Promise((resolve, reject) => {
  const randomNumber = Math.random();

  setTimeout(() => {
    if (randomNumber < 6) {
      resolve("Well");
    } else {
      reject("Wrong");
    }
  }, 2000);
});

//use promise
promise.then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log(error);
  }
);

//promise chaining
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Solve");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("wrong");
  }, 2000);
});

Promise.all(
  [promise1, promise2]
    .then((data) => console.log(data[0], data[1]))
    .catch((error) => console.log(error))
);
