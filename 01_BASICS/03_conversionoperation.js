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
// console.log(stringNumber); //33
// console.log(typeof stringNumber);//string

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);//-3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);//2 to the power2
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " vaish"

let str3 = str1 + str2
// console.log(str3);//hello vaish

//confusion code:

// console.log("1" + 2);//12
// console.log(1 + "2");//12
// console.log("1" + 2 + 2);//122
// console.log(1 + 2 + "2");//33
//so dont be dependent on this confusing code

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);//1
//console.log(true+);//dont get executed
// console.log(+"");//0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2//tricky

//prefix and postfix
let gameCounter = 100
++gameCounter;
console.log(gameCounter);