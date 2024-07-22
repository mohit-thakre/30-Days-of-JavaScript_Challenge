// ACTIVITY 1
// TASK 1

const element = document.getElementById("element");
element.innerText = "day 9 of 30 days of javascript challange";

// TASK 2

const element1 = document.getElementsByClassName("element1");
element1[0].style.backgroundColor = "blue";
element1[0].style.color = "white";

// ACTIVITY 2
// TASK 3

const newDiv = document.createElement("div");
newDiv.innerHTML = "this is the div created using js ";
document.body.appendChild(newDiv);

//  TASK 4

const newLi = document.createElement("li");
newLi.innerText = "new list task 4";

const ul = document.getElementById("list");
list.appendChild(newLi);

// ACTIVITY 3
// TASK 5
const remove = document.querySelector(".task5");
remove.remove();

// TASK 6
const listChild = document.querySelector(".task6");

listChild.removeChild(listChild.lastElementChild);
