const score = 400
// console.log(score);

//to exclusively define datatype
const balance = new Number(100)
// console.log(balance);//[Number: 100]

// console.log(balance.toString().length);//3 char in 100
// console.log(balance.toFixed(1));//100.0->for precision value

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));//123.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));//10,00,000->indian standard

// +++++++++++++ Maths +++++++++++++++++++++++++++++
//this library is  by default
// console.log(Math);//good for browser console
// console.log(Math.abs(-4));//4->negative to +ve only
// console.log(Math.round(4.6));//5
// console.log(Math.ceil(4.2));//choose top
// console.log(Math.floor(4.9));//choose lower value
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());->b/w 0 and1
// console.log((Math.random()*10) + 1);//for 1 or greater
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)