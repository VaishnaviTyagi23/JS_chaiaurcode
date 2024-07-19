const accountId =144553
let accountEmail = "vaish@google.com"
var accountPassword = "12345"
accountCity = "Jaipur "

// accountId =2 // not allowed

accountEmail=" vaish@hello.com"
accountPassword="2122111"
accountCity="pune"
let account;//gives undefined

console.log(accountId );
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log( account,accountEmail,accountId,accountPassword,accountCity);