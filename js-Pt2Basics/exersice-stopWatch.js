// STOPWATCH - create a stopWatch (prop: duration, methods: reset, start, stop)

// call start, call stop, then call duration
// stopwatch object - calling functions


// define a function for the stopwatch 

function stopwatch(){

    // define variable for start, stop, duration and set to 0 

    let startTime, stopTime, running, duration = 0

    // create start

    this.start = function (){
        if(running)
        throw new Error('Stopwatch has already started.')
    }

    this.stop = function(){
        if(!running)

        running = true

        startTime = new Date()
    }

    this.stop = function (){

        if(!running)
        
        running = false,

        stopTime = new Date ()

        const seconds = (stopTime.getTime() - startTime.getTime()/ 1000)
        duration += seconds
    }

    this.reset = function(){

        startTime = null
        stopTime = null 
        running = 0
        duration = 0
    }

    

    // create stop

    // create duration 

}







