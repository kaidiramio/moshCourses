// performing a task 

function greet(name, lastName){
    console.log('Hello' + name + '' + lastName)
}
// parameter/input is name & lastName

// Calculating a value 

function square(number){
    return number * number;
}

console.log(square(2))

// REMEMBER -> a real world app is a collection of hundreds or 1,00s of functions working together to provide the functionaily of that application


// function declaration 
function walk(){
    console.log('walk')
}

// KEY DIFFERENCE BETWEEN THEM:

// HOISTING: 

// is when the javascript engine runs it moves all function decalartions to the top
// we can call function before it's defined in a function declaration
// we cannont do this with a function that has been defined using function expression syntax. 



// Anonymous function expression
// declare a variable or a constant and setting it to a function 
let run = function() {
    console.log('run')
}
let move = run 
// both move and run access run too so one object 
run()
// call it: 
