// ACTIVITY 1
// TASK 1

const book = {
  title: "the engineering",
  author: "mohit",
  year: "2004",
};
console.log(book);

// TASK 2

console.log("title: ", book.title);
console.log("author: ", book.author);

// ACTIVITY 2

// TASK 3
book.titleAndAuthor = function () {
  return `title:${book.title}, author:${book.author}`;
};
console.log(book.titleAndAuthor());

// TASK 4

book.updateYear = function (year) {
  this.year = year;
};
book.updateYear(2000);
console.log(book);

// ACTIVITY 3

// TASK 5

const library = {
  name: "library",
  books: [
    {
      title: "a",
      book: "b",
    },
    {
      title: "c",
      book: "d",
    },
  ],
};

console.log("nested object", library);

// TASK 6

console.log("library name is :", library.name);
console.log("book name available in library  :");
for (let i = 0; i <= library.books.length - 1; i++) {
  console.log(i + 1, library.books[i].title);
}

// ACTIVITY 4
// TASK 7

const book1 = {
  title: "the computer",
  author: "cpu",
  year: "2000",
};

book1.access = function () {
  return `title is : ${this.title} , year is: ${this.year}`;
};
console.log(book1.access());

// ACTIVITY 5
// TASK 8

const obj = {
  name: "mohit",
  age: "20",
  dob: 2004,
};
for (let value in obj) {
  console.log(obj[value]);
}

//  TASK 9

let key = Object.keys(obj);
let value = Object.values(obj);
console.log("keys in obj:", key);
console.log("value in obj:", value);
