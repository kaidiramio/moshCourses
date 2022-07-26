// Objects = collections of key/value pairs -> grouping related variables and functions that operate on these variables (highly related)

// object oriented programming = style of programming where we see a program as a collection of objects that talk to each other to perform some functionality 

// Below we have a circle object and object has properties and a function

let radius = 1
let x = 1
let y =1

// define object using object literal syntax {}
const circle ={
    // add key/value pairs - can be number, boolean, array, function, null, underfiened, string

    radius: 1,

    location:{
        x: 1,
        y: 1
    },
    // better to put functions inside the object
    isVisible: true,
    draw: function(){
        console.log('draw')
    }

}

// calling the draw method of the circle object
// function is part of an object
// in OOP we refer as function = method
circle.draw()



// Constructor Function = create or construct a function 

function Circle(radius){
    // adding new property
    this.radius = radius

    this.draw = function(){
        console.log('draw')
    }

}

const circle = new Circle(1)

// new operator (3 things happen)
    // 1. creates empty javascript object
    // 2.  sets this to point  to this new empty object(so we have access)
    // 3. will return this new object from this new function => happens under the hood

