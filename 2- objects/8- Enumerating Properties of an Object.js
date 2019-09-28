const circle = {
	radius: 1,
	draw() {
		console.log('draw');
	}
};
// Simple way
for (let key in circle) console.log(key, circle[key]);

for (let key of Object.keys(circle)) console.log(key);

for (let entry of Object.entries(circle)) console.log(entry);
// check if property exists in a object
if ('radius' in circle) console.log('yes');
