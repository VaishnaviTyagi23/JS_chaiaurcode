// Global and local scope

// let a=10;
// const b=20
// var c=30
// console.log(a);
// console.log(b);
// console.log(c);
//10
//20
//30


//{}-> with any function or if-else defines scope

// let a = 300
if (true) {
    let a=10;
    const b=20
    var c=30
    //as they are declared inside so they should not be accessible outside   
}
// console.log(a);//not working
// console.log(b);//not working
// console.log(c);//30->should not be printed


//var c = 300
let a = 300
//here its global scope
if (true) {//inside is block scope
    let a = 10
    const b = 20
    // console.log("INNER: ", a);  //10 
}
//value in global scope should be accessible in block scope but not vice versa
//scope in browser -> inspect is different from global scope in code environment


// Scope level and mini hoisting:
 
function one(){
    const username = "hitesh"

    function two(){//can access variables in one()
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);//error and two( )is not executed
    //line by line execution
     
    two() //if commented out then no result


}

// one()//hitesh


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);//when no error->hitesh youtube
    }
    // console.log(website);//1st error

}

// console.log(username);//2nd error


// // ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))//6
function addone(num){
    return num + 1
}
// addone(5)//no print



addTwo(5)// error as here not allowed
const addTwo = function(num){// these are also function as variable
    return num + 2
}
addTwo(5)// no error



