let str = 'Hacker';
let result = str.split('');
console.log(result);
result.forEach((element, index) => {
	// console.log(index, element);
	if (index % 2 === 0) console.log(element);
	if (!index % 2 === 0) console.log(element);
});

function review(value, str0, str1) {
	value = 2;
	str0 = 'Hacker';
	str1 = 'Rank';
	let firstSplit = str0.split('');
	console.log(firstSplit);
	let even0 = firstSplit.forEach((element, index) => {
		if (index % 2 === 0) console.log(element);
	});
	console.log(
		firstSplit.forEach((element, index) => {
			if (index % 2 === 0) console.log(element);
		})
	);
	console.log(even0);
}

review(2, 'Hacker', 'Rank');

// var x = 'HELLO WORLD';
// var res = x.charAt(0);
// var res = x.charAt(1);
// console.log(res);
