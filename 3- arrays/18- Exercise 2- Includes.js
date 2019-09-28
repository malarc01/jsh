const numbers = [1, 2, 3, 4];

console.log(numbers.includes(4));

function incs(array, searchElement) {
  array.forEach(element => {
    let result = element === searchElement ? "true" : "false";
    console.log(result);
    return result;
  });

  // for (let item of array){
  //   if(item ===searchElement) ? console.log('true'):console.log('false')
  // if (item ===searchElement) {
  //   console.log(true)
  // }
  // if else {
  //   console.log(false)
  // }
}

console.log(incs(numbers, 3));

// My Solution 1
function i(array, searchElement) {
  for (let element of array) {
    if (element === searchElement) {
      return true;
    }
  }
  return false;
}

// Another solution with out brackets
function i2(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;
  return false;
}

console.log(i(numbers, 3));
console.log(i2(numbers, 4));
