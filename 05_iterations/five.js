//forEach(used most)

const coding = ["js", "ruby", "java", "python", "cpp"]

//call back function is used here which has no name
//function (val){
//     console.log(val);
// }

// coding.forEach( function (val){
//     console.log(val);
// } )
//output:
// js
// ruby
// java
// python
// cpp

// variation2->arrow function
// coding.forEach( (item) => {
//     console.log(item);
// } )
//same output 

//type-3
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)
//same output

// coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
// } )
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

// objects in array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
//javascript
// java
// python