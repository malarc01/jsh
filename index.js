// can't be reserved keyboard
// should be meaningful
// cannot start with a number (1name)
// cannot contain a space or hypen (-)

// let firstName = 'm',
// lastName = 'a';

let lastName = "a";

const interestRate = 0.3;

// Primitives /Value Types  vs  Reference Types
// String
// Number
// Boolean
// undefined
// null

// Reference Types
// Object
// Array
// Function

let name = "Mosh"; // String Literal
let age = 30; //Number Literal
let isApproved = true; //Boolean Literal
let firstName = undefined;
let selectedColor = null;

// 5.Objects
let person = {
  name: "Mosh",
  age: 30
};

// Dot Notation
person.name = "John";

// Bracket Notation
person["name"] = "Mary";

// Bracket notation is used when you do not know the property being accessed @ runtime

let selection = "name";
person[selection] = "Mary";

console.log(person.name);

// 6. Arrays
let selectedColors = ["red", "blue"];
selectedColors[6] = "1";
console.log(selectedColors[0]);
console.log(selectedColors.length);

// 7. Functions
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

greet("John", "Smith");
greet("Mary");

// 8. Types of Functions

//performing a task or calculating a value

function square(number) {
  return number * number;
}

console.log(square(2));

//Operators -> Arthmetic, etc.
