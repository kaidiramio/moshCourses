// OOP - Object Oriented Programming - paradigm centered around objects rather than functions - combine a group of realted variables and funtions into a objects. We refer to these Variables as properties and the functions as methods. 

// Ex: Car has properties like make, model, color & methods like start, stop, and move.  

// Encapuslation, abstraction, inhertitence, polymorphism 

// BEFORE OOP was procedural programming - divided a program into a set of functions, data stored in a bunch of variables, and functions that run off that data (more interdependcy from all functions)


// every browser has a localStorage object (stores data locally on computer)


// Encapuslation - group realted variables and functions into objects 

    let baseSalary = 30_000
    let overtime = 10
    let rate = 10

    // procedural variables on one side and functions on otherway. 

    function getWage(baseSalary, overtime, rate){
        return baseSalary + (overtime * rate)
    }

    // OOP way to solve 
    let employee = {
        baseSalary: 30_000,
        overtime: 10,
        rate: 20,

        // get wage function has no parameters because all parameters are modeld as properties to the object (they're part of one unit). Functions end up having fewer and fewer parameters 
        getWage: function(){
            return this.baseSalary + (this.overtime * this.rate)
        }
    }
    employee.getWage()

// Abstraction - can hide some properties and methods from the outside (inner or private methods). Provides simpler interface, reduce the impact of change (changes won't impact/leak the rest of programs code because we don't have anything outside of their containing object). 


// Inheritance - mechanism that allows you to elimate redundant code
// example (html elements): textbox, select, checkBox could all have properties like hidden or inner html and methods like click and focus. INSTEAD of defining this for ALL of them seperately we can combine them once in a generic object and call it HTML object and have other objects inherit these properties and methods. 


// Polymorphism (poly = many ; morph = form) - technique that allows you to get rid of if and else or switch and case statements. Following our example in Inhertiance we can add a render method and the render method will behave differently depending on the type of the object we are referencing: 

// element.render()

// Benfits of OOP 

// 1. Encapuslation - Reduce complexity + increase reusability by grouping related variables and functions together as objects
// 2. Abstraction - Reduce complexity + isolate impact of changes in code by since abstraction hides the details and the complexities and shows only the essentials. 
// 3. Inheritience - Eliminate redundant code
// 4. Polymorphism - Re-factor ugly if and else or switch/case statements. 





