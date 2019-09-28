// for-in

const person = {
  name: "Mosh",
  age: 30
};

for (let key in person) console.log(key, person[key]);

const colors = ["red", "green", "blue"];

for (let inex in colors) console.log(inex, colors[inex]);

// for-of

for (let color of colors) console.log(color);

//Summary for in for iterate over properies of an object
// for-of to iterate over elements or items in an array
