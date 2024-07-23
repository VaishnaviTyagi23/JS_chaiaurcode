//object singleton or using constructot

//singleton object
const tinderUser = new Object() 
// console.log(tinderUser);//{}

//Non-singleton Object
// const tinderUser = {}
// console.log(tinderUser);//{}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
//{ id: '123abc', name: 'Sammy', isLoggedIn: false }

//to put object inside object
const regularUser = {
    email: "some@gmail.com",
    fullname: { //can go any deep nesting
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname);
//{ userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }
// console.log(regularUser.fullname.userfullname);
//{ firstname: 'hitesh', lastname: 'choudhary' }
//console.log(regularUser.fullname.userfullname.firstname);
//hitesh

//optional chaining -> when any object is maybe not present than we use question mark with which it works ok in its absense
//console.log(regularUser.fullname? .userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3);
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign(obj1, obj2, obj4)
// console.log(obj3);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


//Object.assign() is a static method which copies all enumerable
//own properties from one or more source objecs to a target object. It 
// returns the modified target object.->MDN
// const obj3 = Object.assign( {},obj1, obj2, obj4)//{}->target(if not goes to obj1),others->source
// console.log(obj3);
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//Commonly used:
// const obj3 = {...obj1, ...obj2}


//when values come from database:
//Array of object
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);
//{ id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser));
//[ 'id', 'name', 'isLoggedIn' ]
//output datatype is array
 
console.log(Object.values(tinderUser));
//[ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));
//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//true->when wanted to know if a certain property is present  


// Destructuring of Object
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course
//value to be extracted=course Object
//from courseInstructor
// console.log(courseInstructor);//hitesh

// const {courseInstructor: instructor} = course//->renaming
// console.log(instructor);//hitesh


//You get few values from backend And the way you write it is API
// Now you get values in json:
//{
//     "name": "hitesh",//here keys are also string
//     "coursename": "js in hindi",
//     "price": "free"
// }

//API in array forward: 
// [
//     {},
//     {},
//     {}
// ]
