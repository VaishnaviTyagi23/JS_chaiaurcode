const name = "hitesh"//declare string way-1
const repoCount = 50

// console.log(name + repoCount + " Value");

//$ is called string interpolation for variables
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hiteshhc')//declare type-2

// console.log(gameName[0]);//h
// console.log(gameName.__proto__);//{}->ives empty object

//Use of object:
// console.log(gameName.length);
// console.log(gameName.toUpperCase());//HITESHHC
console.log(gameName.charAt(2));//t
console.log(gameName.indexOf('t'));//2

//to divide string
const newString = gameName.substring(0, 4)//hite->last value not included
console.log(newString);

const anotherString = gameName.slice(-8, 4)//can also give negative value
console.log(anotherString);//ite

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());//remove space ->go to mdn

const url = "https://hitesh.com/hitesh%20choudhary"
//browser converts space to %20
console.log(url.replace('%20', '-'))
//https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar'))

console.log(gameName.split('-'));//split based on -