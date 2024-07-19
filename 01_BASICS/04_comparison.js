// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//when you dont compare same datatype is unpredictabel
// console.log("2" > 1);//true
// console.log("02" > 1);//true

//as null is treated as 0 in others but not in ==
console.log(null > 0);//false 
console.log(null == 0);//false
console.log(null >= 0);//true here its conversion problem

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false

//these above comparison are avoided

// === checks value also the datatype

console.log("2" === 2);