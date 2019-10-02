// this refers to the object that is executing the current function

// method => obj
// function => global (window, global)

const video = {
	title: 'Video',
	tags: [ 'a', 'b', 'c' ],
	showTags() {
		// const self = this;
		this.tags.forEach((tag) => {
			console.log(this.title, tag);
		});
	}
};

video.showTags();

function playVideo(a, b) {
	// console.log(this);
}

playVideo.call({ name: 'Ken' }, 1, 2);
playVideo.apply({ name: 'Bo' }, [ 1, 2 ]);
playVideo.bind({ name: 'Mo' })();

playVideo();
