// object constructors
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = () => isRead;
}
Book.prototype.info = function () {
  `${this.title} written by ${this.author} and has ${this.pages} Pages. ${
    this.isRead ? "You have alread read it." : "You have not read it yet."
  }`;
};
const history = new Books();

// factory function

const Person = (name) => {
  const sayName = () => console.log(`my name is ${name}`);
  return { sayName };
};

const Nerd = (name) => {
  // simply create a person and pull out the sayName function with destructuring assignment syntax!
  const { sayName } = Person(name);
  const doSomethingNerdy = () => console.log("nerd stuff");
  return { sayName, doSomethingNerdy };
};

const jeff = Nerd("jeff");

jeff.sayName(); //my name is jeff
jeff.doSomethingNerdy(); // nerd stuff

// objecy.assign
const Nerd0 = (name) => {
  const prototype = Person(name);
  const doSomethingNerdy = () => console.log("nerd stuff");
  return Object.assign({}, prototype, { doSomethingNerdy });
};

// modular pattern is just a factory function inside iife
const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();

calculator.add(3, 5); // 8
calculator.sub(6, 2); // 4
calculator.mul(14, 5534); // 77476


//////////// classsses
class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

// Usage:
let user = new User("John");
user.sayHi();

///////////////////
class MyClass {
  prop = value; // property

  constructor(...) { // constructor
    // ...
  }

  method(...) {} // method

  get something(...) {} // getter method
  set something(...) {} // setter method

  [Symbol.iterator]() {} // method with computed name (symbol here)
  // ...
}