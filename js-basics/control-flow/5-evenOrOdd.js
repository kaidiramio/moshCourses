
showNumbers(10);

function showNumbers(limit){
  for (let i = 0; i <= limit; i++){
    if(i % 2 === 0){
      console.log(i, 'even')
    }else{
      console.log(i, 'odd')
    }
  }
}


// OPTIMIZED CODE
function showNumbers(limit) {
  // set i to zero and as long as i is less than or equal to limit we will run loop and increment
  for (let i = 0; i <= limit; i++) {
    const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
    console.log(i, message);
  }
}