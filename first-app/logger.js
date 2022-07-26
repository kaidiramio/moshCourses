// for logging messages (send http request to url and they'll log it)

// node wraps the code inside each module in a function expression and passes exports, require, module, _filename, _dirname as arguments) 

// Module wrapper function - require is local to EVERY module

var url = 'http://mylogger.io/log'

function log(message){
    // send an HTTP request
    console.log(message)
}

// scoped to this module only (private)


// module.exports.log = log
// export variables and functions - allows them to become public/accsible outside of the module
// module.exports.endPoint = url

// to export just a single function do 
module.exports = log
