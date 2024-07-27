// ACTIVITY 1
// TASK 1

function error() {
  throw new Error("error occur at try catch task 1");
}
try {
  error();
} catch (error) {
  console.log(error);
}

// TASK 2
function divide(n, d) {
  if (d === 0) {
    throw new Error("division by zero is not possible");
  }
  console.log(n / d);
}
try {
  divide(2, 10);
} catch (error) {
  console.log(error);
}

// ACTIVITY 2
// TASK 3

function finallyBlock(e) {
  if (e) {
    throw new Error("this is try block error at task 3");
  } else {
    console.log("task executed successfully");
  }
}

try {
  console.log("i am without error");
  finallyBlock(false);
} catch (error) {
  console.log(error);
} finally {
  console.log("this is finally block");
}

// ACTIVITY 3

// TASK 4

class CustomError extends Error {
  constructor(m) {
    super(m);
    this.name = this.constructor.name;
  }
}

function someFunction() {
  throw new CustomError("This is a custom error message.");
}

try {
  someFunction();
} catch (error) {
  if (error instanceof CustomError) {
    console.log("Caught a custom error:", error.message);
  }
}

// TASK 5

const namee = "mohit";

try {
  if (namee === "" || typeof namee === "number") {
    throw new Error("enter a valid name");
  } else {
    console.log(namee);
  }
} catch (error) {
  console.log(error);
}

// ACTIVITY 4
// TASK 6

const promise = new Promise((resolve, reject) => {
  reject("error at promise rejection");
});
promise
  .then((e) => {
    console.log(e);
  })
  .catch((err) => console.log(err));

// TASK 7

async function task7() {
  try {
    const res = await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("this is error at task 7 async function");
      }, 2000);
    });
  } catch (error) {
    console.log(error);
  }
}
task7();

// ACTIVITY 5
// TASK 8

function promiseApi() {
  fetch("://unstop.com/hackathons/")
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err.message));
}
promiseApi();

// TASK 9

async function asyncApi() {
  try {
    const res = await fetch("://unstop.com/hackathons/");
  } catch (error) {
    console.log(error.message);
  }
}
asyncApi();
