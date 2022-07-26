
let number = max(5, 3);
console.log(number);

function max(num1, num2){
  if (num1 > num2){
    return num1
  } else return num2
}


// OPTIMIZED
function max(num1, num2){
  return (num1>num2) ? num1 : num2;
}