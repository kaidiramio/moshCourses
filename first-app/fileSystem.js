// •••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
// file sysyem MODULE - operating system you can use it to find your operating system or use other utility methods. 

// allows you to work with the file system on your computer.

const fs = require('fs')

//  async version of FS files
fs.readdir('./', function(err, files){
    if(err) console.log('Error', err)
    else console.log('Result', files)
})

