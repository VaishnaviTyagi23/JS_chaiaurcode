/*Two ways to declare objects:
1. As a literal(Not a singleton)
2. As a constructor

singleton object
->when an object is made by constructor
->Object.create
*/ 

// object literals

const mySym = Symbol("key1")
//now use symbol as a key in object and print it

//object declared
const JsUser = {
    name: "Hitesh",//key:values 
    "full name": "Hitesh Choudhary",//can't acess it with(.)
    [mySym]: "mykey1",//only option
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// //access objects
// console.log(JsUser.email)//type1
// console.log(JsUser["email"])//type2
//hitesh@google.com
// hitesh@google.com

// console.log(JsUser["full name"])

//Unique datatype->Symbol
// console.log(JsUser[mySym])//only way 

//value change
// JsUser.email = "hitesh@chatgpt.com"

//to lock value
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"//no change is made
// console.log(JsUser);


//functions are treated as variables in js
JsUser.greeting = function(){
    console.log("Hello JS user");
}
// console.log(JsUser.greeting);//undefined
console.log(JsUser.greeting());//Hello JS user

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//when we wish to acess same object properties use this
}
console.log(JsUser.greetingTwo());//Hello JS user, Hitesh

//undefined can also be seen with them