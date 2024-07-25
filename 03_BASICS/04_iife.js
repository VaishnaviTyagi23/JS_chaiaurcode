// Immediately Invoked Function Expressions (IIFE)
// when we need immediate execution eg. database file
//to not have global scope pollution

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
//()->definition
//()->excecution call eg. chai()
//; need to stop immediately

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
//look it as function
