let address = {
	street: 'Main Street',
	city: 'New York',
	zipCode: 10001
};
// Factory Function
function createAddress(street, city, zipCode) {
	return {
		street: street,
		city: city,
		zipCode: zipCode
	};
}
const myAddress = createAddress('high street', 'Roslyn Heights', 11577);
console.log(myAddress);

// Constructor Function
function Address(street, city, zipCode) {
	this.street = street;
	this.city = city;
	this.zipCode = zipCode;
}
const anotherAddress = new Address('main street', 'New York', 10001);
console.log(anotherAddress);
