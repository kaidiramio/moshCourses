
const movie = { 
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b'
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj) {
    // key holds name of property
    // console.log(key)

    // get value of property use bracket notation
    if (typeof obj[key] === 'string')
      console.log(key, obj[key]);
  }
}