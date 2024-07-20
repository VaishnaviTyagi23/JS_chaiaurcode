//for interview
//datatypes are divided into two types on the basis of
//1.how data is stored in memory
//2. how data is accesed in memory


/* Type1-> Primitive
->they are call by value so when copied or sent through function their copies are made and no change is made in their real value

-> 7 types : String, Number, Boolearn, null(its empty not 0), undefined, Symbol(used for uniqueness), BigInt(for big values eg. scientific)
*/
//Number
const score = 100
const scoreValue = 100.3
//Boolean
const isLoggedIn = false
//Null-empty
const outsideTemp = null
//undefined (can be manually defined)
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);//false

//BigInt->use n in last
// const bigNumber = 3456543576654356754n


/*
// Type2-Reference (Non primitive)
->whose reference in memory can be directly allocated
->Array, Objects, Functions
->all their datatype is called functions
but for functions its called objects
*/
//array
const heros = ["shaktiman", "naagraj", "doga"];

//object
let myObj = {
    name: "hitesh",
    age: 22,
}
//function as variable
const myFunction = function(){
    // console.log("Hello world");
}

//to know datatype
// console.log(typeof anotherId);
//gives object for null

// https://262.ecma-international.org/5.1/#sec-11.4.3
//table 20-> for interview


// Stack(Primitive) , Heap (Non-Primitve)

let myYoutubename = " hiteshchoudharydotcom"//goes in stack

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

//heap eg.
let userOne ={
    email: "hello@google.com",
    upi: "user@ybl"
}

let userTwo= userOne
userTwo.email= "hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);
