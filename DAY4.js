// ACVTIVITY 1
// TASK 1

for (let a = 1; a <= 10; a++) {
  console.log(a);
}

// TASK 2

for (let b = 1; b <= 10; b++) {
  console.log("5 *", b, "=", 5 * b);
}

// ACTIVITY 2

//TASK 3

let c = 1;
let ans = 0;
while (c <= 10) {
  ans += c;
  c++;
}
console.log(ans);

// TASK 4

let d = 10;
while (d >= 1) {
  console.log(d);
  d--;
}

// ACTIVITY 3

//TASK 5

let e = 1;

do {
  console.log(e);
  e++;
} while (e <= 5);

// TASK 6

let number = 10;
let factorial = 1;
do {
  factorial *= number;
  number--;
} while (number >= 1);
console.log(factorial);

// ACTIVITY 4
// TASK 7

for (let i = 0; i <= 5; i++) {
  let line = "";
  for (let j = 0; j <= i; j++) {
    line += "*";
  }
  console.log(line);
}

// TASK 8

for (let num = 0; num <= 10; num++) {
  if (num === 5) {
    continue;
  }
  console.log(num);
}

// TASK 9

for (num1 = 0; num1 <= 10; num1++) {
  if (num1 === 7) {
    break;
  }
  console.log(num1);
}
