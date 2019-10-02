// this refers to the object that is executing the current function

// method => obj
// function => global (window, global)

const video = {
	title: 'Video',
	tags: [ 'a', 'b', 'c' ],
	showTags() {
		this.tags.forEach(function(tag) {
			console.log(this.title, tag);
		}, this);
	}
};

video.showTags();
