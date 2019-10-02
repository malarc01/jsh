// this is The object that is executing the current function

// method => obj
// function => global (window, global)

const video = {
	title: 'a',
	tags: [ 'a', 'b', 'c' ],

	play() {
		console.log(this);
	}
};

video.stop = function() {
	console.log(this);
};

video.stop();

function Video(title) {
	this.title = title;
	console.log(this);
}
const v = new Video('b'); // {}
