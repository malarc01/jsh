const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf(1, 2));
console.log(numbers.lastIndexOf(1));

//Element exist in the array
console.log(numbers.indexOf(1) !== -1);

//new method for the same thing
console.log(numbers.includes(3));
