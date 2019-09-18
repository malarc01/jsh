// for
// while
// do-while

// for-in used to iterate through properities of an object
const person = {
  name: "Mosh",
  age: 30
};

for (let key in person) console.log(key, person[key]);

const colors = ["red", "green", "blue"];
for (let inex in colors) console.log(inex, colors[inex]);

// for-of

// Dot notation
person.name;
//Bracket notation
person["name"];
