const movie = {
	title: 'a',
	releaseYear: 2018,
	rating: 4.5,
	director: 'b'
};

showProperties(movie);

// My Solution
function showProperties(obj) {
	for (let key in obj) {
		if (typeof (key, obj[key]) === 'string') console.log(key, obj[key]);
	}
}

const person = {
	name: 'Mosh',
	age: 30
};

// console.log(person[]);
for (let key in person) console.log(person[key]);
for (let key in person) console.log(key, person[key]);
for (let key in person) console.log(key);

console.log(Object.keys(person));
console.log(Object.values(person));

console.log(Object.entries(person));
