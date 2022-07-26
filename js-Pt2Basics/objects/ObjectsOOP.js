// Object Literals - curly braces {} object literal syntax - collection of key value pairs

// property used to hold values
// methods = used to define some logic
const circles = {
    radius: 1, 
    location: {
        x: 1, 
        y: 1, 
    },
    
    // draw is a method - others are properties 
    draw: function(){
        console.log('draw')
    }
}

// // dot notation
circles.draw()



// FACTORY FUNCTION To Duplicate - We want to create another circle (if a bug we have to fix in ALL places. If that object has 1> methods it has behavior/ 

function createCirlce(radius){
    return{
        radius, 
        // draw is a method - others are properties 
        draw: function(){
            console.log('draw')
        }
    }

}

const circle = createCirlce(1)
circle.draw()


// Constructor Function - first letter uppercase

function CircleOne(radius){
    // 'this' keyword is a reference to the object that is executing this piece of code (referencees the object).  
    this.radius = radius
    this.draw = function(){
        console.log('draw')
    }
}


// create a new circle by using the new operator - 1. new operator creats an empty object {} 2. then it sets 'this' to point to that object.'this' points to a global object (if running in node enviornment it's pointing to global, if running in browser it's pointing to window object ) 3. returns object from the 'this' function (origional)
const anotherC = new CircleOne(1)

// THESE ARE BOTH REGULAR FUNCTION IN JAVASCRIPT - Nothing special. Approaches depend - many prefer constructor function syntax, but in javascript we don't have classes. For javascript many also like factory functions. 

// Functions are Objects (in vs code purple icons are the methods associated with object and blue icons are properties ) 



// Call vs APPLY

// Call/ invoke a function and 
CircleOne.call({}, 1)

// way to invoke a function - call a function but instead of passing all the arguments seperately, we pass them in an array. 
CircleOne.apply({}[1,2,3])


// DATA  TYPES:  value tpyes = number, boolean, string, undefined, null vs Reference Types = Object, Function, Array 
// Primitives (Value Types) are copied by their value vs Reference tpyes (objects) are copied by their reference


// Value type example 
let x = 10 
let y = x 

x =20 

// Reference type example. When we use an object that object is not stored in the variable, it's stored somewhere else in the memory and the address of that memory location is stored inside that variable. Both x and y are pointing to the same object in memory

let xx =  {value: 10}
let yy = xx 

xx.value =20 


// Another example 
let obj = {value: 20}

function increase(obj){
    obj.value++
}

increase(obj)
console.log(obj)

// ADDING OR REMOVING PROPERTIES - use bracket notation
function CircleTwo(radius){
    // 'this' keyword is a reference to the object that is executing this piece of code (referencees the object).  
    this.radius = radius
    this.draw = function(){
        console.log('draw')
    }
}

const CircleTwo = new CircleTwo(10)

circle.location = {x: 1}

// bracket notation to access property
CircleTwo['location'] = {x:1}
// access location property of code 
circle[propertyName] = {x:1}

// REMOVE PROPERTY (don't wanna send password/credit card info etc)

delete CircleTwo['location']

// Enumerate = iterate over an object (get methods)

for (let key in circle){
    console.log(key, circle[key])
}

// get property draw

for (let key in circle){
    if(typeof circle[key] != 'function')
    console.log(key, circle[key])
}


// ABSTRACTION IN OOP - Hide the deatails and expose only the essentials. Includes private properties and methods. Public interface of objects are simpler and easier to work with and prevents issues down the road

// Private Properties and Methods - we should location property in below example from the consumers

function CircleThree(radius){
    // 'this' keyword is a reference to the object that is executing this piece of code (referencees the object).  
    this.radius = radius
    this.defaultLocation = {x:0, y: 0}

    this.computeOptimumLocation = function(){
        // 
    }

    this.draw = function(){
        this.computeOptimumLocation()

        console.log('draw')
    }
}

const CircleThree = new CircleThree(10)

CircleThree.computeOptimumLocation()
CircleThree.draw()


// CLOSURE: determines what variables will be accessible to an inner function. So a function within a function will be able to access all local variables defined as well as variables defined in the parent function. The variables within the parent function are within the scope of that function, but within the closure of the inner function. Scope is temp and dies(done after function is closed) 

// Example: 

// closure continues to stay in memory 
function outerFunc(){
    // lexical scope
    let outerVar = 'I am outside'

    function innerFunction(){
        outerVar // 'I am outside'
    }

    return innerFunction
}

// set variable 
const myInnerFunction = outerFunc()
// call function

// lexical scope - code in one scope can access variables in same scope or scope outside of it 

// myName's lexical scope is global because we defined it in the global enviornment 

// Global scope
let x = 2 
function outerFunc(){
    let y = 5

    function innerFunction(){
       let z = 77
    }

    // innerfunction has access to all 3 variables x, y, z 
    // x, y = outer scope and z = inner scope
}


// GETTERS AND SETTERS - Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable. Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function.

// To define a getter/setter, use Object.defineProperty():

Object.defineProperty(this, 'defaultLocation', {
    get: function() { return defaultLocation; },
    set: function(value) { defaultLocation = value; }
});





