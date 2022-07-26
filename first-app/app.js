// function sayHello(name){
//     console.log('Hello' + name) // global object like setTimeout(), clearTimeout(), setInterval(), clearInterval()
// }

// sayHello('Kai')

// use REQUIRE to load the module of your choice - Best practice = store result as a constant so we don't accidently override it.

// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// PATH MODULE - allows you to work with/access file and directory paths
const path = require('path')

var pathObj = path.parse(__filename)

console.log(pathObj)

// ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// const log = require('./logger')
// log('message')
// indicates current folder/file ../ = parent 
// returns the object that is exported from target module
