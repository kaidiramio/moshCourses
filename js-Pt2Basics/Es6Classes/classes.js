// new ES^ syntax is syntacitcal sugar 

// babeljs.io => a javascript compiler where we give it our modern js code and it compiles it down to ES5 code that all browsers understand.

// **********************
// body of class -> can define properties and methods. Class declarations and expressions are NOT hoisted.

// with extrends you don't need to reset the constructor
// **********************

// Class Declaration
class Circle {
    //  pass radius parameter
    constructor(radius) {
        this.radius = radius; 
    }

    // Define methods in the BODY of the CLASS. These methods will be added to the prototype. 
    draw() {
    }

    // This will be available on the Circle class (Circle.parse())
    static parse(str) {
    }
}


// **********************
// HOISTING
// **********************

// Function Declaration - hoisted/raised to top of code. You can declare a function and then call it before its declaration

sayHello()
function sayHello(){}

// Function Expression - does not hoist. Dealing w/ a const or variable that is not initialized. 

const sayGoodbye = function() {}




// **********************
// Using symbols to implement private properties and methods
const _size = Symbol();
const _draw = Symbol();

class Square {
    constructor(size) {
        // "Kind of" private property 
        this[_size] = size; 
    }

    // "Kind of" private method 
    [_draw]() {
    }

    // By "kind of" I mean: these properties and methods are essentally
    // part of the object and are accessible from the outside. But accessing
    // them is hard and awkward. 
}

// using WeakMaps to implement private properties and methods
const _width = new WeakMap();

class Rectangle {
    constructor(width) {
        _width.set(this, width);
    }

    draw() {
        console.log('Rectangle with width' + _width.get(this));
    }
}

// WeakMaps give us better protection than symbols. There is no way 
// to access private members implemented using WeakMaps from the 
// outside of an object. 

// Inheritance 
class Triangle extends Shape {
    constructor(color) {
        // To call the base constructor 
        super(color);
    }

    draw() {
        // Method call - Call the base method on object => .this points to that object
        super.draw();

        // Do some other stuff here
    }
}


// IF you forget to use the new operator .this by default points to the global object which is window in browser // global in node


// Strict Mode - JavaScript engine will be more sensitve. It will do more error checking and will change the behavor of the .this keyword in function. Enable by creating a string 'use strict'. If we call a method as a function .this, by default, will be set to undefiend and will no longer point to the global object (so we don't modify the global object)
