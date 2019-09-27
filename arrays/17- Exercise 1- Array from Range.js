const numbers = arrayFromRange(-10, -4);

console.log(numbers);

//1
//2
//3
//4

// number =1
//
// return number+= 1
// number
//join()
// stop at 4

// Me Solution

function arrayFromRange(min, max) {
	array = [];
	start = min;
	limit = max;
	array.push(min);
	console.log(array);
	while (min < limit) {
		value = [ (min += 1) ];
		console.log(value);
		console.log(typeof value[0]);
		console.log((combinedArray = value.join()));
		converted = parseInt(combinedArray, 10);
		console.log(typeof converted);

		console.log(typeof combinedArray);

		console.log(combinedArray);
		array.push(converted);
	}
	console.log(array);
	// combined = array.concat(value)
	// console.log(combined)
}

const nums = arrFromRange(1, 4);

console.log(nums);

// Another Solution
function arrFromRange(min, max) {
	const output = [];
	for (let i = min; i <= max; i++) output.push(i);
	return output;
}
