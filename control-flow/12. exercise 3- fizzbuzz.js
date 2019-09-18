//Divisible by 3 => Fizz
// Divisble by 5 => Buzz
// Disivisble by 3 and 5 => FizzBuzz
// Not disvisible by 3 or 5 => input
// Not a number => 'Not a number'

const output = fizzBuzz(false);
console.log(output);

function f(input) {
  if (input % 5 === 0 && input % 3 === 0) console.log("FizzBuzz");
  else if (input % 5 === 0) console.log("Buzz");
  else if (input % 3 === 0) console.log("Fizz");
  else if (!input % 5 === 0 && !input % 3 === 0) console.log("input", input);
  else console.log("NOT A NUMBER");
}

//Solution
function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;
  if (input % 5 === 0 && input % 3 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input;
}
