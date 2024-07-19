// ACTIVITY 1
// TASK 1

const arr = [1, 2, 3, 4, 5];

console.log(arr);

// TASK 2
console.log("first element of array: ", arr[0]);
console.log("last element of array: ", arr[arr.length - 1]);

// ACTIVITY 2
// TASK 3

const arr1 = [9, 8, 7, 6, 5];
const push = arr1.push(4);
console.log("push", arr1);

// TASK 4

const pop = arr1.pop(arr1[arr1.length - 1]);
console.log("pop:", arr1);

// TASK 5
const shift = arr1.shift();
console.log("shift :", arr1);

// TASK 6
const unshift = arr1.unshift(99);
console.log("unshift:", arr1);

// ACTIVITY 3

// TASK 7

const arr2 = [11, 22, 33, 44, 55];
const map = arr2.map((item) => {
  return item * 2;
});
console.log("double of arr2:", map);

// TASK 8

const filter = arr2.filter((num) => num % 2 === 0);
console.log(filter);

// TASK 9
const reduce = arr2.reduce((acc, num) => acc + num);
console.log(reduce);

// ACTIVITY 4
// TASK 10
const arr3 = [1, 2, 3, 4, 5];

for (let i = 0; i <= 4; i++) {
  console.log(arr[i], "using for loop");
}

// TASK 11

arr3.forEach((value) => console.log(value, "using forEach loop"));

// extra
for (let value in arr3) {
  console.log(arr3[value], "using for in loop");
}

// TASK 12

const arr2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0, 9],
];
console.log(arr2D);

// TASK 13
console.log(arr2D[2][3]);
