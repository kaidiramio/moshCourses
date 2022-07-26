
function Shape() {}
function Circle() {}

// Inheritence helps us reduce duplication, clone an existing object and EXTEND it. 

// Prototypical inheritance 
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle; 

// whenever you reset the prototype of an object, reset the constructor

function Rectangle(color) {
    // To call the super constructor 
    Shape.call(this, color);
}

// Method overriding - reimplimenting a method in a child object. 
Shape.prototype.draw = function() {}
Circle.prototype.draw = function() {
    // Call the base implementation 
    Shape.prototype.draw.call(this);

    // Do additional stuff here 
}

// •••••••••••••••••••••••••••••••••••••••••••••
// Polymorphism - many implimentations or many forms of a method. We could write a program for shapes with if /else statements but what if we had 10 different shapes? that'd be 11 if/else statements in the block. 

// CONS
// Careful using inheritence since it can make source code heiarchy complex (think animal > dog > cat> fish with all different methods) - not really needed in small projects (keep it simple). Start with SIMPLE OBJECTS, if you notice a number of these objects share similar features than you can encapsulate those features inside of a generic object and use inheritence. 
// •••••••••••••••••••••••••••••••••••••••••••••

// i.e

const shapes=[
    new Circle(),
    new Square()
    
]

for(let shape of shapes){
    if (shape.type === 'circle') 
        duplicateCircle()

    else if (shape.type === 'square')   
        duplicateSquare()

    else duplicateShape()

}

// using inheritence we can execute many forms of a method with a single line of code => 

for(let shape of shapes){
    shape.duplicate()

}

// •••••••••••••••••••••••••••••••••••••••••••••
// Some other CONS to Inheritience: 

// Favorite composition over inheritence => we can compose a few objects together to create a new object (more flexibility)

// Don't create large inheritance hierarchies. 
// One level of inheritance is fine. 
// •••••••••••••••••••••••••••••••••••••••••••••


// •••••••••••••••••••••••••••••••••••••••••••••
// Use mixins to combine multiple objects and implement composition in JavaScript. 
// •••••••••••••••••••••••••••••••••••••••••••••

const canEat = { 
    eat: function() {}
};

const canWalk = {
    walk: function() {}
};

function mixin(target, ...sources) {
    // Copies all the properties from all the source objects 
    // to the target object. 
    Object.assign(target, ...sources);
}

function Person() {}

mixin(Person.prototype, canEat, canWalk);