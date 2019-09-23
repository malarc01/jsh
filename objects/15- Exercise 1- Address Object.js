const address = {
	street: 'Main Street',
	city: 'New York',
	zipCode: 10001
};
function showAddress(address) {
	for (let key in address) console.log(key, address[key]);
}
showAddress(address);
