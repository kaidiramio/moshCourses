// Event Modules - provides us the EventEmitter class, which is key to working with events in Node.js.

// EventEmitter = class, containers for realted methods and properties (what we can do)
const EventEmitter = require('')

// this is an object - actual instance of a class (what we use in application)
const emitter = new EventEmitter()

// Register a listener (callback)
emitter.on('messageLogged', function(){
    console.log('Listener called')
})

// Raise an event making a noise, produce - signalling event is happening (pass in argument that is the name of the event)

// you can add multiple event arguments (best to encapsulate those values inside an object {})
emitter.emit('messageLogged')
