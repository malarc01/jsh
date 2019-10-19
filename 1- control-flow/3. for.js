// LOOPS Types
// for
// while
// do... while
// for ...in
// for ...of

for (let i = 5; i >= 1; i--) {
	// if (i % 2 !== 0) console.log(i);
}

let i = 0;

for (let n = 1; n >= 11; n++) {
	console.log(n);
}

// for (let m = 1; m <= 10; m++) {
// 	let number = 2;
// 	let result = number * m;
// 	console.log(`${number} x ${m} = ${result}`);
// }

// scrap paper notes
function processData(input) {
	let input = 'test';
	console.log(input);

	for (let input = 1; input >= 11; input++) {
		console.log(input);
	}

	value = 2;
	str0 = 'Hacker';
	str1 = 'Rank';

	let firstSplit = str0.split('');
	let secondSplit = str1.split('');
	// console.log(firstSplit);
	let arrEven0 = [];
	let arrOdd0 = [];
	let arrEven1 = [];
	let arrOdd1 = [];

	firstSplit.forEach((element, index) => {
		if (index % 2 === 0) {
			arrEven0.push(element);
			// console.log(even)
		}
	});

	firstSplit.forEach((element, index) => {
		if (index % 2 !== 0) arrOdd0.push(element);
	});
	secondSplit.forEach((element, index) => {
		if (index % 2 === 0) {
			arrEven1.push(element);
			// console.log(even)
		}
	});

	secondSplit.forEach((element, index) => {
		if (index % 2 !== 0) arrOdd1.push(element);
	});

	// console.log(arrEven0);
	// console.log(arrOdd0);
	// console.log(arrEven1);
	// console.log(arrOdd1);

	console.log(
		`${arrEven0.join('')} ${arrOdd0.join('')} 
${arrEven1.join('')} ${arrOdd1.join('')} `
	);
}
