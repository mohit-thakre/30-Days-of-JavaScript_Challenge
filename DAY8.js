// ACTIVITY 1
// TASK 1

const namee = `mohit thakre`;
const age = 20;
console.log(`hello i'm ${namee} & i'm ${age} year old`);

// TASK 2

const multiLine = `hii, this is mohit
and i am a full stack web developer 
and a aspiring software engineer`;
console.log(multiLine);

// ACTIVITY 2
// TASK 3

const arr = [1, 2, 3, 4, 5];
const [first, second] = arr;
console.log("first element:", first);
console.log("second element:", second);

// TASK 4
const book = {
  title: "the engineer",
  author: "i am the author",
};
const { title, author } = book;
console.log("title of book:", title);
console.log("author of book:", author);

// ACTIVITY 3
// TASK 5

const array = [1, 2, 3, 4, 5];
const spread = [...array, 4, 6, 7];
console.log(spread);

// TASK 6
function sum(...value) {
  return value.reduce((acc, curr) => acc + curr);
}
console.log(sum(1, 2, 3, 4, 5));

// ACTIVITY 4
// TASK 7

function product(num1, num2 = 1) {
  return num1 * num2;
}
console.log("product using single parameter and default value", product(10));
console.log("product using both parameter", product(10, 10));

// ACTIVITY 5
// TASK 8

const nameS = "mohit";
const rollNo = 20;

const student = {
  nameS,
  age,
  func() {
    return ` hi i'm ${nameS} and my roll no is ${rollNo}`;
  },
};

console.log(student, student.func());

// TASK 9

const value1 = "firstName";
const value2 = "lastName";

const person = {
  [value1]: "mohit",
  [value2]: "thakre",
  func() {
    return ` hi i'm ${this[value1]}  ${this[value2]}`;
  },
};
console.log(person, person.func());
