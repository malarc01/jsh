let str = 'Hacker';
let result = str.split('');
console.log(result);
result.forEach((element, index) => {
	console.log(index, element);
	if (index % 2 === 0) console.log(element);
	if (!index % 2 === 0) console.log(element);
});

function review() {
	console.log(`${even0} ${odd0}
    ${even1} ${odd1}`);
}

var x = 'HELLO WORLD';
var res = x.charAt(0);
var res = x.charAt(1);
console.log(res);
