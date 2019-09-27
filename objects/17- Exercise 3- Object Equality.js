let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

// Constructor Function
function Address(street, city, zipCode) {
	this.street = street;
	this.city = city;
	this.zipCode = zipCode;
}

function areEqual(address1, address2) {
	for (let key in address1) {
		for (let value in address2) {
			if (address1[key] === address2[value]) {
				return console.log(address1[key] === address2[value]);
			} else {
				console.log('false');
			}
		}
	}
}

function areSame(address1, address2) {
	if (address1 === address2) {
		console.log('true');
	} else console.log('false');
}
areSame(address1, address2);
console.log(areSame(address1, address2));

// Solution
function rEqual(address1, address2) {
	return (
		address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode
	);
}

console.log(rEqual(address1, address2));

function rSame(address1, address2) {
	return address1 === address2;
}

console.log(rSame(address1, address2));
// End of Solution for both Functions
