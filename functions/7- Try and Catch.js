const person = {
	firstName: 'Ham',
	lastName: 'Eggs',

	// get fullName() {
	//     return `${person.firstName} ${person.lastName}`
	// },
	set fullName(value) {
		if (typeof value !== 'string') throw new Error('Value is not a string.');

		const parts = value.split(' ');
		if (parts.length != 2) throw new Error('Enter first & last name');
		this.firstName = parts[0];
		this.lastName = parts[1];
	}
};

try {
	person.fullName = 'Tupac Shakur';
} catch (e) {
	console.log(e);
	//alert(e)
}

// getters => access properties
// setters => change (mutate) them

console.log(person);
