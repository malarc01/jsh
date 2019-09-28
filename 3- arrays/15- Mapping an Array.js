const numbers = [ 1, -1, 2, 3 ];

const filtered = numbers.filter((n) => n >= 0);

const items = filtered.map((n) => '<li>' + n + '</li>');

const html = '<ul>' + items.join('') + '</ul>';

//mapping value to Objects
const itemsObj = filtered.map((n) => {
	const obj = { value: n };
	return obj;
});

//mapping value to Objects
const itemsObj2 = filtered.map((n) => ({ value: n }));

const chainMethods = numbers
	.filter((n) => n >= 0)
	.map((n) => ({ value: n }))
	.filter((obj) => obj.value > 1)
	.map((obj) => obj.value);

console.log(filtered);
console.log(items);
console.log(html);
console.log(itemsObj);
console.log(chainMethods);
