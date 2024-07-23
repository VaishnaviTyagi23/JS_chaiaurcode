/* array{object  which enables collection of
 multiple items under a single valuriable name}
Declaration:(elemnts can be of diff type)
->they are resizable
->they can be only accesed as a[1];
->it creates shallow copies which share the same reference
*/
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)//declaration type2 
//with which it gets prototype access
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //[9, 0, 1, 2,3, 4, 5]
// myArr.shift()// 1, 2, 3, 4, 5


// console.log(myArr.includes(9));//false
// console.log(myArr.indexOf(3));//3
// console.log(myArr.indexOf(9));//-1

const newArr = myArr.join()
//add all the elemts of an array into a string, separated by the specified separator

// console.log(myArr);//[ 0, 1, 2, 3, 4, 5 ]
// console.log( newArr);//0,1,2,3,4,5->string type


// slice, splice->interview

console.log("A ", myArr);// [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)//3rd is not included
//[ 1, 2 ]
console.log(myn1);//[ 0, 1, 2, 3, 4, 5 ]
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);//[ 0, 4, 5 ]
console.log(myn2);//[ 1, 2, 3 ]

/* Difference b/w slice and splice is
1. slice doesn't include last index specified
   splice includes last index
2. Slide doesnt make any change in original index
   Splice removes the elemets from original index. */