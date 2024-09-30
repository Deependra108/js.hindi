const accountId = 144533
let accountEmail = "Deepeendra@gmail.com"
var  accountpassword = "12345"
accountCity = "Chhatarpur"
let  accountState;

// accountId = 2 // not allowed
accountEmail = "DS@gmail.com"
accountpassword = "123"
accountCity  = "Panna"

console.log(accountId);

/*
prefer not to use of var 
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountpassword, accountCity, accountState]);


