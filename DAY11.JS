// ACTIVITY 1
// TASK 1

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolve in 2 sec.");
  }, 2000);
});
promise.then((e) => {
  console.log(e);
});

// TASK2
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("error occure during promise "));
  }, 2000);
});
promise1.catch((err) => {
  console.log(err.message);
});

// ACTIVITY 2
// TASK 3

const promise3 = (value, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });
};
promise3(1, 2000)
  .then((e) => {
    console.log(e * 2);
    return promise3(2, 3000);
  })
  .then((e) => {
    console.log(e * 3);
    return promise3(3, 4000);
  })

  .then((e) => {
    console.log(e * 4);
    return promise3(4, 4000);
  })
  .catch((e) => {
    console.log(e);
  });

// ACTIVITY 3
// TASK 4

async function task4() {
  try {
    const res = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("promise by async await");
      }, 2000);
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

task4();

// TASK 5

async function task5() {
  try {
    const res = await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("promise rejected by async await");
      }, 2000);
    });
  } catch (error) {
    console.log("error:", error);
  }
}

task5();

// ACTIVITY 4
// TASK 6

function fetchPromise() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => {
      if (!res.ok) {
        new Error("error at data fetch using promise");
      }
      return res.json();
    })
    .then((data) => console.log("data is:", data))
    .catch((e) => console.log(e));
}

// TASK 7
fetchPromise();

async function fetchdata() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchdata();

// ACTIVITY 5
// TASK 8

p1 = Promise.resolve("e");
p2 = new Promise((resolve) => setTimeout(() => resolve("hello jiii"), 2000));
p3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 1000, "promise p3");
});

Promise.all([p1, p2, p3])
  .then(function (values) {
    console.log(values);
  })
  .catch((e) => console.log(e));

//  TASK 9
Promise.race([p2, p3]).then(function (values) {
  console.log(values);
});
