
const array = [0, null, undefined, '', 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0; 
  for (let value of array) 
    if (value)
    //  not comparing - simply passing value here (could be boolean or not)
      // if value is a truthy increment count and return count^^
      count++;
  return count; 

}

// Falsy Values:
// undefined
// null
// ''
// false
// 0
// NaN