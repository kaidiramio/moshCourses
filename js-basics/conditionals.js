// if else conditionals

// hour 
 
// if hour is between 6 am and 12pm = Good mornin
// if it's between 12pm and 6pm = Good afternoon
// otherwise: Good evening! 

// can assign null to variable

// variable 
let hour = 10

if(hour >= 6 && hour < 12){
    console.log('Good morning')
} else if (hour >= 12 && hour <18){
    console.log('Good afternoon')
} else{
    console.log('Good evening')
}


// Swith case 

let role; 

switch(role){
    case 'guest': 
    console.log('Guest User')
    break; 

    // break statement must be there to jump out of the above block

    case 'moderator':
        console.log('Moderator User')
        break;

        // default is simialar to else 
    default:
        console.log('Uknown User')
}

// in else if it looks like 

if (role === 'guest') console.log('guest!')
else if (role === 'moderator') console.log('moderator!')
else console.log('unknown User')

// takeaway: swith and case we can compare the value of a variable against a bunch of other values
// similar logic to using if and else 