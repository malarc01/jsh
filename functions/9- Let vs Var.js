function start() {
	for (var i = 0; i < 5; i++) {
		if (true) {
			let color = 'red';
		}
	}

	console.log(color);
}
// var is not limit to code block LIMITED TO THE FUNCTION IT IS DEFINED

// var => function-scoped
// ES6 (ES2015): let, const => block-scoped

start();

// Second Issue
var color = 'red'; // attached to window Object not good for 3rd party libraries confliction
let age = 30;
