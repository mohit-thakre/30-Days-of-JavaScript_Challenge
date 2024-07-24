// ACTIVITY 1
// TASK 1

const button1 = document.querySelector(".button1");
button1.addEventListener("click", function () {
  document.querySelector(".para").innerHTML = "this is changed by js events";
});

// TASK 2
let toggle = 0;
const button2 = document.querySelector(".button2");

button2.addEventListener("dblclick", function () {
  const task2 = document.querySelector(".task2");
  if (toggle === 0) {
    task2.style.width = 0;
    button2.innerHTML = "show image";
    toggle = 1;
  } else {
    task2.style.width = "300px";
    button2.innerHTML = "hide image";
    toggle = 0;
  }
});

// ACTIVITY 2
// TASK 3
const task3 = document.querySelector(".task3");
task3.addEventListener("mouseover", function () {
  task3.style.backgroundColor = "red";
});
// TASK 4
task3.addEventListener("mouseout", function () {
  task3.style.backgroundColor = "white";
});

// ACTIVITY 3
// TASK 5

const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newF = new FormData(form);
  newF.forEach((value, key) => console.log(`${key}: ${value}`));
  console.log("clicked");
});
