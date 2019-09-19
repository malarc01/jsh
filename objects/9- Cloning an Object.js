const circle = {
	radius: 1,
	draw() {
		console.log('draw');
	}
};

// const another = {};
// for (let key in circle )
// another[key] = circle[key];
// another['radius'] = circle['radius'];

const another2 = Object.assign({ color: 'yellow' }, circle);

const another3 = { ...circle };

console.log(another2);
console.log(another3);
