// Inheritence - enables an object to take on the properties and methods of another object. Makes it easy to reuse code in other parts of an app. For EXAMPLE: 

// class shape = base/super/parent // circle and shape = derived/sub/child

// ************************************
//CLASS vs Prototypical Inheritance 
// ************************************

// Class Inheritance = can only inherit properties and methods you have to inherit class

// Class inheritance is a way for one class to extend another class. So we can create new functionality on top of the existing.

// think of animals -- animal class and then can create and extend a dog class -> object of dog class this will have access to both dog methods and animal methods (say run())
class Animal {
    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
  }
  
  let animal = new Animal("My animal");

  class Dog extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }
  }
  
  let dog = new Dog("Black Dog");
  
  dog.run(5); // Black Dog runs with speed 5.
  dog.hide(); // Black Dog hides!


// cons: creates parent/child object classifications as a side-effect. Inflexible hierarchy, duplication vs adapting code (harder to solve for bugs), 

// Prototypes = regular object in memory. Every object has a prototype or parent, except the root object. 

// Prototypical Inheritance => objects can inherit directly from other objects => when we access a property or method on an object the JS engine first looks for that property on the object itself. If it can't find it, then it walks up the protype chain. (looks at the prototype of that object all the way up to the root object)

let user1 = {
    name: 'Kai',
    id: 100,
}

let user2 = {}

Object.setPrototypeOf(user2, user1)
console.log('user 2', user2.name1)


// Every object (except the root object) has a prototype (parent -). // prototype is the parent of another object. Objects directly or indirectly inherit all the prototypes 

// ************************************
// To get the prototype of an object:
// ************************************

Object.getPrototypeOf(obj); 

// In Chrome, you can inspect "__proto__" property. But you should 
// not use that in the code. 

// ************************************
// To get the attributes of a property:
// ************************************

Object.getOwnPropertyDescriptor(obj, 'propertyName');

// ************************************
// To set the attributes for a property:
// ************************************

Object.defineProperty(obj, 'propertyName', {
    configurable: false,    // cannot be deleted
    writable: false,
    enumerable: false
});

// ************************************
// Constructors have a "prototype" property. It returns the object that will be used as the prototype for objects created by the constructor.
// ************************************

Object.prototype === Object.getPrototypeOf({})
Array.prototype === Object.getPrototypeOf([])

// All objects created with the same constructor will have the same prototype. 
// A single instance of this prototype will be stored in the memory. 
const x = {};
const y = {};
Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // returns true 

// Any changes to the prototype will be immediately visible to all objects 
// referencing this prototype. 

// ************************************
// When dealing with large number of objects, it's better to put their
// methods on their prototype. This way, a single instance of the methods
// will be in the memory. 
// ************************************

Circle.prototype.draw = function() {}

// ************************************
// To get the own/instance properties:
// ************************************
Object.keys(obj);

// ************************************
// To get all the properties (own + prototype): 
// ************************************

for (let key in obj) {}



// ITERATE OVER INSTACES vs PROTOYPE PROPERTIES  

function CircleOne(radius){
    // instance members
    this.radius = radius
    this.move = function(){
        console.log('move')
    }
    
}

const c1 = new CircleOne(1)

// Protoype Memebers

CircleOne.protoype.draw = function(){
    console.log('draw')
}

// Returns instance members (2)["radius", "move"]
console.log(Objec.keys(c1))

// for in returns all members (instance(own property) + protoype)
for (let key in c1) console.log(key)

// AVOID EXTENDING THE BUILT-IN OBJECTS - done, overwrite methods, don't add new methods or properties because somewhere in the library there might be code that is dependent on those methods in the built-in objects. Nothing also stops 
Array.prototype.shuffle = function(){
    // 
}

const array = []
array.shuffle()