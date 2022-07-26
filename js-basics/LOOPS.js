// FOR LOOP -- 3 statements, initial expression; condition (loop will run until condition is true);
// increament expression i++ or i-- (evaluate value with 1) 
// i is short for index (loop variable)

// repeat an an action a number of times

for(intial expression; condition/set limit ; increament expression){
    statement
}


for(let i = 0; i <= 5; i++){
    if(i % 2 !== 0)
    console.log(i)
}


// WHILE LOOP (variable only accessible in the loop)
let i = 0;
while(condition); statement; 
    while block 
    increament
}

while(i <=5){
    if(i % 2 !==0)
    i++
}

// FOR OF LOOP - iterate over the elements or items in a array

const colors =['red', 'yellow', 'green']
for (let color of colors)
    console.log(color)

// Iterate over the properties of objects (USE FOR OBJECTS) 
    // For In LOOPS

const person = {
    name: 'Mosh'
    age: 30
}

for (let key in person)
    console.log(key, person[key])

// Dot Notation 
person.name

// Bracket Notation
person['name']


// AVOID INFINITE WHILE LOOP - runs forever

let i = 0;
while(i<=5){
    console.log(i)
    i++
}

// AVOID INFINITE FOR LOOP - runs forever

for(let i = 0; i<10)

// BREAK - breaks you out of loop at condition set. 