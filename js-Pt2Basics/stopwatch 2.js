
function Stopwatch() { 
  let startTime, endTime, running, duration = 0;

  // read only property - expose properties
  Object.defineProperty(this, 'duration', {
    get: function() { return duration; }
  });

  Object.defineProperty(this, 'startTime', {
    get: function() { return startTime; }
  });

  Object.defineProperty(this, 'endTime', {
    get: function() { return endTime; }
  });

  Object.defineProperty(this, 'running', {
    get: function() { return running; }
  });
}
// move methods outside of function for PUBLIC scope (global)
// expose methods 

Stopwatch.prototype.start = function() {
  if (this.running) 
    throw new Error('Stopwatch has already started.');
  
  this.running = true; 

  this.startTime = new Date();
};

Stopwatch.prototype.top = function() {
  if (!this.running) 
    throw new Error('Stopwatch is not started.');

  this.running = false; 
    
  this.endTime = new Date();

  const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
  duration += seconds; 
};

Stopwatch.prototype.eset = function() { 
  this.startTime = null;
  this.endTime = null;
  this.running = false; 
  duration = 0; 
};

