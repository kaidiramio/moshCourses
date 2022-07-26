
console.log(isLandscape(800, 700));

function isLandscape(width, height) {
  if(width > height){
    return true
  } else return false 
}

// returns true if w > height otherwise it's false


// OPTIMIZED 

function isLandscape(width, height) {
  return (width > height)
  // return the expression not ? terinary 
}
