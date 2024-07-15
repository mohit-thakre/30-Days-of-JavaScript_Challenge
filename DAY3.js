//  ACTIVITY 1

//task 1
const num = -1;
if (num > 0) {
  console.log("number is positive");
} else if (num === 0) {
  console.log("number is zero");
} else {
  console.log("number is negative");
}

//task 1

const age = 18;
if (age >= 10) {
  console.log("eligible for vote");
} else {
  console.log("not eligible for vote");
}

// ACTIVITY 2

// task 3
const a = 10;
const b = 2;
const c = 15;

if (a >= b) {
  if (a >= c) {
    console.log("a", a);
  } else {
    console.log("c", c);
  }
} else {
  if (b >= c) {
    console.log("b", b);
  } else {
    console.log("c", c);
  }
}

// ACTIVITY 3

// tast 4

const day = 6;

switch (day) {
  case 1:
    console.log("today is sunday");
    break;
  case 2:
    console.log("today is monday ");
    break;
  case 3:
    console.log("today is tuesday");
    break;
  case 4:
    console.log("today is wednesday");
    break;
  case 5:
    console.log("today is thusday");
    break;
  case 6:
    console.log("today is friday");
    break;
  case 7:
    console.log("today is saturday");
    break;
  default:
    console.log("enter a valid number ");
}

// task 5

const marks = -20;

switch (true) {
  case marks > 100 || marks < 0:
    console.log("enter a valid number");
    break;
  case marks >= 80:
    console.log(" grade A");
    break;
  case marks >= 65:
    console.log(" grade B");
    break;
  case marks >= 50:
    console.log(" grade C");
    break;
  case marks >= 40:
    console.log(" grade D");
    break;
  case marks >= 0:
    console.log(" grade F");
    break;
}

//  ACTIVITY 4

//  task 6

const number = 1;

number % 2 === 0
  ? console.log("number is even ")
  : console.log("number is odd");

//  ACTIVITY 4

// task 7

const year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("leap year");
} else {
  console.log("not leap year");
}
