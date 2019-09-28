function maxofTwo(x, y) {
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  }
}

function mTwo(x, y) {
  if (x > y) console.log("Larger number is ", x);
  else if (y > x) console.log("Larger number is ", y);
  else console.log("it is a draw");
}

// Solution

let number = max(5, 9);
console.log(number);

function max(a, b) {
  // if(a>b) return a;
  // return b;

  return a > b ? a : b;
}
