//Array specific loops



// ["", "", ""]
// [{}, {}, {}]

// for of loop
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}
//1
//2
//3
//4
//5

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}
//Each char is H
//Each char is e
// ...
//Each char is 
//Each char is w
//...


// Maps(check in mdn)

const map = new Map()
map.set('IN', "India")//key,value
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")//only one entry and values in order of their entry 


// console.log(map);
// // {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }

for (const key of map) {
    // console.log(key);
}
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]


for (const [key, value] of map) {
    // console.log(key);
}
// //IN
// USA
// Fr


for (const [key, value] of map) {
    // console.log(key, ':-', value);
}
// IN :- India
// USA :- United States of America
// Fr :- France


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}
//myObject is not iterable