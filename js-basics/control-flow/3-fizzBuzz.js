
// Divisible % by 3 => Fizz
// Divisible % by 5 => Buzz
// Divisible % by both 3 and 5 (15) => FizzBuzz
// Not Divisible by 3 or 5 (15) => Fizz
// NAN => not a number



const output = fizzBuzz(17);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== 'number')
    return NaN; 

  if ((input % 3 === 0) && (input % 5 === 0))
  // or input % 15
    return 'FizzBuzz'; 

  if (input % 3 === 0)
    return 'Fizz'; 
    
  if (input % 5 === 0)
    return 'Buzz'; 
    
  return input; 
}

// shortcut option ^ to move code up lines