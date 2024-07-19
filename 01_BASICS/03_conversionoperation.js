let score =33
// console.log(typeof score);//number
// console.log(typeof(score));//both are same

let n = "33 "
// console.log(typeof n);//string
//conversion to number
let valueInNumber = Number(n)//similarly for String
// console.log(typeof valueInNumber);//number

let b="334aa"
let valueInNumber2 = Number(b)
// console.log(typeof valueInNumber2 );//string
// console.log(valueInNumber2);//NaN

let c=null
let valueInNumber3 = Number(c)
// console.log(valueInNumber3);//0

let d=undefined
let valueInNumber4 = Number(d)
// console.log(valueInNumber4);//NaN

//for boolean value
let e=true
let valueInNumber5 = Number(e)
// console.log(valueInNumber5);//1


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hello"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

//isLoggedIn:
//1->true
//""->false
//"anyname"->true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber); //33
console.log(typeof stringNumber);//string
