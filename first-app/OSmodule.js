// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// OS MODULE - operating system you can use it to find your operating system or use other utility methods. 

const os = require('os')

var totalMemory = os.totalmem()
var freeMemory = os.freemem()

// Template String in ES6 

console.log`Total Memory: ${totalMemory}`
console.log`Free Memory: ${freeMemory}`


// Node.js v18.1.0
// kaidiramio@Kais-Air first-app % node app.js
// [ 'Total Memory: ', '' ] 8589934592
// [ 'Free Memory: ', '' ] 86609920