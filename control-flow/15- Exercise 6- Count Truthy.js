const isActive = true;
const name = 'Mosh'; // Truthy (true)
const nameEmpty = ''; // Falsy (true)

// Falsy Values
// undefined
// null
// ''
// false
// 0
// NaN

//Example of falsy below

if (nameEmpty) console.log('hello');

//Example of for of loop
const colors = [ 'red', 'green', 'blue' ];

// for (let color of colors) console.log(color);

const array = [ 0, 1, 2, 3, 4, null, undefined, '' ];
// Solution 1
function countTruth(array) {
	let numberOfTruth = 0;
	for (let item of array) {
		item ? numberOfTruth++ : false;
	}
	console.log(numberOfTruth);
}

countTruth(array);

// Solution 2
function countTruthy(array) {
	let numberOfTruth = 0;
	for (let item of array) {
		if (item) numberOfTruth++;
		else if (!item) 'do nothing';
	}
	console.log(numberOfTruth);
}

countTruthy(array);

//Solution 3
function numberOfTruthy(array) {
	let count = 0;
	for (let value of array) {
		if (value) count++;
	}
	return count;
}
console.log(numberOfTruthy(array));
