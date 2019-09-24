function showNumbers(number) {
	const limit = number;
	for (number = 0; number <= limit; number++) {
		// console.log(number)
		if (number % 2 === 0) console.log(number, 'EVEN');
		else if (!number % 2 === 0) console.log(number, 'ODD');
		// const message = (number&2===0) ? 'EVEN':'ODD'
		// console.log(number,message)
	}
}

//Better  solution
function showNumerals(number) {
	const limit = number;
	for (number = 0; number <= limit; number++) {
		// console.log(number)

		const message = number % 2 === 0 ? 'EVEN' : 'ODD';
		console.log(number, message);
	}
}

showNumbers(3);
showNumerals(3);
