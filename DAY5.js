// ACTIVITY 1

// TASK1

function check(num) {
  if (num % 2 === 0) {
    console.log("number is even");
  } else {
    console.log("number is odd");
  }
}
check(5);

// TASK 2

function square(num) {
  console.log(num * num);
}
square(4);

// ACTIVITY 2
// TASK 3
const maximum = function (num1, num2) {
  if (num1 >= num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
};
maximum(1, 2);

// TASK 4
const concatString = function (str1, str2) {
  console.log(str1 + str2);
};
concatString("mohit", "thakre");

// ACTIVITY 3
// TASK 5

const sum = (num1, num2) => {
  return num1 + num2;
};
console.log(sum(2, 2));

// TASK 6

const checkSpecial = (str) => {
  const pattern = /[!@#$%^&**()]/;
  return pattern.test(str);
};
console.log(checkSpecial("mohit*"));

// ACTIVITY 4
// TASK 7

const multiParameter = (num1, num2 = 10) => {
  return num1 * num2;
};
console.log(multiParameter(1));

// TASK 8
const personalDetails = (name, age = 20) => {
  return `hello ${name} `;
};
console.log(personalDetails("mohit"));

// ACTIVITY 4
// TASK 9

function greeting() {
  return "hello ";
}
const multiFunction = (functionn, num) => {
  for (let i = 0; i < num; i++) {
    console.log(functionn());
  }
};

multiFunction(greeting, 5);

// TASK 9
function multiply(a) {
  return a * a;
}
function even(a) {
  if (a % 2 === 0) {
    return `no ${a} is even`;
  } else {
    return `no ${a} is odd`;
  }
}
const higherOrderFunction = (func1, func2, value) => {
  const result = func1(value);
  console.log(`multiplication of given no ${value} is :`, result);
  return func2(result);
};
console.log(higherOrderFunction(multiply, even, 5));
