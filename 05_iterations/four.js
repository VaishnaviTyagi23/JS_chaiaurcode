//for in loop used for object and others
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
}
// js
// cpp
// rb
// swift

//for all values
for (const key in myObject) {
    // console.log(myObject[key]);
}
// javascript
// C++
// ruby
// swift by apple

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}
// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple


//can this work with array
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);
}
// 0
// 1
// 2
// 3
// 4

for (const key in programming) {
    console.log(programming[key]);
}
// js
// rb
// py
// java
// cpp

//check in map

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
//map is not iteratable so no result