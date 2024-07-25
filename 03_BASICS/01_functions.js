// code is closed in a package and can be moved anywhere->function

//defination
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayMyName//nothing comes->reference

// sayMyName()//-> to execute

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// addTwoNumbers()//NaN
// addTwoNumbers(3,4)//7
// addTwoNumbers(3,"4")//34
// addTwoNumbers(3,"a")//3a
// addTwoNumbers(3,null)//3

//Parameters->number1, number2
//Arguments->3,4,"4"..->passed when function is called


// function addTwoNumbers(number1, number2){

//         console.log(number1 + number2);
//     }
// // addTwoNumbers(3, 5)//8

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);//Result:  undefined-> as not returned


//Return:
function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result
    // return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);//Result:  8



// function loginUserMessage(username = "sam"){//if nothing passed then sam else overwrite
    // if(!username){
    //     console.log("PLease enter a username");
    //     return
    // }
    // return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh"))//hitesh just logged in
// console.log(loginUserMessage())//undefined->without if

//when unknown no. of parameters
//(...)->called rest and spread operator based on its use
//(...)->here rest
function calculateCartPrice(val1,val2, ...num1){
    return num1
}
//...num1
// console.log(calculateCartPrice(200, 400, 500, 2000))//[ 200, 400, 500, 2000 ]

//val1,val2, ...num1
// console.log(calculateCartPrice(200, 400, 500, 2000))//[ 500, 2000 ]

//Object:(how its passed and used in functions)
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)//Username is hitesh and price is 199
// handleObject(user)//when prices in object
// Username is hitesh and price is undefined

// handleObject({//direct object is paased
//     username: "sam",
//     price: 399
// })//Username is hitesh and price is 399


//Pass Arrays in it
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));//400
console.log(returnSecondValue([200, 400, 500, 1000]));//direct pass