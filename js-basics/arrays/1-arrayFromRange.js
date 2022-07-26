
const numbers = arrayFromRange(1, 4);

console.log(numbers);

// get array with numbers 1-4

function arrayFromRange(min, max) {
  // empty array
  const output = [];

  // for loop to generate min and max 
  for (let i = min; i <= max; i++)
  // push i into the array
    output.push(i);
  return output;
}

// returns 
// [1, 2, 3, 4]