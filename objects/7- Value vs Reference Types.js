// Value Types

// Number
// String
// Boolean
// Symbol (new in ES6)
// undefined
// null

// Reference Types

// Object
// Function
// Array

let obj = { value: 10 };

function increase(obj) {
	obj.value++;
}

increase(obj);
console.log(obj);
//Conclusion = Primitives are copied by they value, Object are copied by their reference
