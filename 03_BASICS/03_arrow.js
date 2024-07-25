//Basic Object: 

//this.a->//for current context
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// // user.welcomeMessage()//hitesh , welcome to website
// // user.username = "sam"
// // user.welcomeMessage()//sam , welcome to website

// //with  console.log(this);
// // user.welcomeMessage()
// //hitesh , welcome to website
// // {
// //     username: 'hitesh',
// //     price: 999,
// //     welcomeMessage: [Function: welcomeMessage]
// //   }
// user.username = "sam"
// user.welcomeMessage()
// //sam , welcome to website
// // {
// //     username: 'sam',
// //     price: 999,
// //     welcomeMessage: [Function: welcomeMessage]
// //   }



// console.log(this);//{} as we are in node env
//but in vonsole it gives Window as its global env


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()//many values if this is called in function without username
//undefined -> this.username
//this only works in objects


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()->undefined

//ARROW FUNCTION:

// 

// chai()//{} -> when this
//undefined -> when this.username
//So this is not the difference between arrow function and normal function

//Explain arrow ():

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))//7

//implicit return:(no need to return if one line statement)
// const addTwo = (num1, num2) =>  num1 + num2
// console.log(addTwo(3, 4))//7

// const addTwo = (num1, num2) => ( num1 + num2 )//note ()dont need return

// const addTwo = (num1, num2) => ({username: "hitesh"})//object return-> without() gives undefined


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()