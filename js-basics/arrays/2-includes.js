
const numbers = [1, 2, 3, 4];

// check to see if a given number exists in the array

console.log(includes(numbers, 1));

function includes(array, searchElement) {
  // for of loop 
  for (let element of array)
  // if it matches searched element match it = true
    if (element === searchElement)
      return true;
  return false;
}
