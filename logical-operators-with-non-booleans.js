// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN

let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor);

// Anything that is not Falsy => Truthy

// Short-circuiting
