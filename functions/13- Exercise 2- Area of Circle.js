// READ & SET circle.radius = 2;
// READ ONLY circle.area = 20;

const circle = {
	radius: 2,
	area: 20,
	get a() {
		return circle.area;
	}
};

circle.radius = 4;
circle.area = 11;
circle.area = 33;
console.log(circle.a);
circle.radius = 6;
circle.radius = 5;
console.log(circle.area);
console.log(circle.radius);

// Solution 1

const sphere = {
	radius: 1,
	get area() {
		return Math.PI * this.radius * this.radius;
	}
	// set r(number){
	//     return this.radius = number
	// }
};

console.log((sphere.radius = 2));
console.log(sphere.area);
console.log((sphere.area = 20));
console.log(sphere.area);
console.log(sphere);
