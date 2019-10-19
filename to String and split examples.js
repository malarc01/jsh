var fruits = [ 'Banana', 'Orange', 'Apple', 'Mango' ];
var x = fruits.toString();
console.log(fruits);
console.log(x);

let split = x.split(',');
console.log(split);

// let join = x.join(',');
console.log(
	fruits.forEach((item) => {
		let firstSplit = item.split(',');
		console.log(firstSplit);
		console.log();
	})
);
