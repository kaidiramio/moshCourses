
const numbers = [1, 2, 3, 4]; 

const max = getMax([]);

console.log(max); 

function getMax(array) { 
  if (array.length === 0) return undefined; 

  let max = array[0];

  for (let i = 1; i < array.length; i++)
    if (array[i] > max)
      max = array[i];

  return max; 

  // return array.reduce((a, b) => (a > b) ? a : b);
}


// MOVIES EXERCISE #7

// array of objects, 4 movie objects with 3 properties.

// shift + option + down = duplicate shortcut 

const movies = [
  {title: 'a', year: 2018, rating: 4.5 },
  {title: 'b', year: 2018, rating: 4.7 },
  {title: 'c', year: 2018, rating: 3 },
  {title: 'd', year: 2017, rating: 4.5 },
]

// all the movies in 2018 with rating > 4 ; sort by their rating, decending order
//  chainable !! 
movies
  .filter(m => m.year === 2018 && m.rating >= 4)
  


