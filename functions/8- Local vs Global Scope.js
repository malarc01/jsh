// should avoid global declarations
// everybody should have a individual toothbrush
const color = 'red';

function start() {
	const message = 'hi';
	const color = 'blue';
	console.log(color);
}

function stop() {
	const message = 'bye';
}

start();

// console.log(message)
