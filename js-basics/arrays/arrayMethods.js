
// ************************************
// FILTERING ARRAY ******************
// ************************************


const numbers = [1, -1, 2, 3]

// pass callback; value, index, array
// arrow function instead of function if we want 
const filtered = numbers.filter(value => {
    return value >=0
}

// OR 

const filtered = numbers.filter(n => n >=0)

// if element matches it'll add result to new array

// OR 
const sweetArray = [2, 3, 4, 5, 35]
const sweeterArray = sweetArray.map(sweetItem => {
    return sweetItem * 2
})

console.log(sweeterArray)

// ************************************
// MAPPING ARRAY ******************
// ************************************

const filtered = numbers.filter(n => n >=0)

filtered.map(n => '<li>' + n + '</li>')
console.log(items)

// shows: 
// 0: '<li>'1 '</li>'
// 1: '<li>'2 '</li>'
// 2: '<li>'3 '</li>'

// OR 

// create a function to use
const makeSweeter = sweetItem => sweetItem * 2;

// we have an array
const sweetArray = [2, 3, 4, 5, 35];

// call the function we made. more readable
const sweeterArray = sweetArray.map(makeSweeter);

console.log(sweeterArray);

// Converting a String to an Array Using Map