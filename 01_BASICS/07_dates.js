// Dates is an object

let myDate = new Date()//object for date
// console.log(myDate.toString());//2024-07-20T17:18:38.931Z

// console.log(myDate.toDateString());//Sat Jul 20 2024
// console.log(myDate.toLocaleString());//7/20/2024, 5:19:12 PM
// console.log(typeof myDate);//object

let myCreatedDate = new Date(2023, 0, 23)
//month in js start from 0 ->January
// console.log(myCreatedDate.toDateString());//Mon Jan 23 2023
//other ways to declare date:

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);//in millisec
// console.log(myCreatedDate.getTime());// in millisec
// console.log(Math.floor(Date.now()/1000));//->in seconds
//1721496334918
// 1674432000000
// 1721496334

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
// 2024-07-20T17:28:16.175Z
// 7
// 6
 
// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
