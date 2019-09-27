const courses = [ { id: 1, name: 'a' }, { id: 1, name: 'b' } ];

const x = courses.find(function(course) {
	return course.name === 'a';
});

const y = courses.find((course) => course.name === 'a');

const course = courses.find((course) => course.name === 'a');

console.log(course);
