// if(condition which should be true to go in){
// }
//condition uses comparator >,<,>=,<=,==,!= , === , !==

const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

//scope related->

const score = 200

if (score > 100) {
    const power = "fly"
    // console.log(`User power: ${power}`);//User power: fly
}
//const, let
// console.log(`User power: ${power}`);//ReferenceError: power is not defined
//User power: fly

// 

// const balance = 1000

//implicit scope->immature
// if (balance > 500) console.log("test"),console.log("test2");

//Nesting
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }


//Real-life
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}