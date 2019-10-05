const array = [ 80, 80, 50 ];

// Average = 70

// 1-59 :F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(array));

// sum of array with loop
function calculateGrade(marks) {
	let total = 0,
		i;
	for (i = 0; i < marks.length; i += 1) {
		total += marks[i];
	}
	return total / marks.length;
}

// sum of array with reduce method
function calGrade(marks) {
	console.log(marks.reduce((accumulator, currentValue) => accumulator + currentValue));
	console.log('end');
}
calGrade(array);

// sum of array with for (let x of array) loop
function cg(marks) {
	let sum = 0;
	for (let item of marks) sum += item;
	// console.log(sum);
	// console.log(sum/marks.length)
	const average = sum / marks.length;
	if (average >= 1 && average <= 59) {
		console.log('F');
	} else if (average >= 60 && average <= 69) {
		console.log('D');
	} else if (average >= 70 && average <= 79) {
		console.log('C');
	} else if (average >= 80 && average <= 89) {
		console.log('B');
	} else if (average >= 90 && average <= 100) {
		console.log('A');
	}
}

cg(array);

console.log(cg2(array));

function cg2(marks) {
	const average = calculateAverage(marks);

	if (average < 60) {
		return 'F';
	}
	if (average < 70) {
		return 'D';
	}
	if (average < 80) return 'C';
	if (average < 90) return 'B';
	return 'A';
}
function calculateAverage(array) {
	let sum = 0;

	for (let value of array) {
		sum += value;
	}

	return sum / array.length;
}
