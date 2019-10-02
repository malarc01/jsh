// sum ([1,2,3,4,5])=>10

function sum(...value) {
	if (Array.isArray(value)) {
		const itemsInArray = value;
		const result = itemsInArray.reduce((total, amount) => total + amount);
		console.log(result);
	}

	console.log(value);
	// return value.reduce((a,b)=>a+b);
	return value.reduce((a, b) => a + b);
}

// (sum([2,3,5])) // Works!
sum(4, 4);

// console.log(sum(1,3,5))

// example of reduce
{
	const euros = [ 29.76, 41.85, 46.5 ];

	const total = euros.reduce((total, amount) => total + amount);

	total;
} // 118.11

console.log(add(1, 2, 3, 4));

// Solution 1

function add(...items) {
	// console.log(items)
	// console.log(items[0])
	if (items.length === 1 && Array.isArray(items[0])) {
		// console.log(items)
		items = [ ...items[0] ];
		// console.log(items)
	}
	console.log(items);
	return items.reduce((a, b) => a + b);
}
