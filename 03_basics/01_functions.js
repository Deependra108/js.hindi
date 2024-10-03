// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     const result = number1 + number2
//     return result

//     // console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result

    // console.log(number1 + number2);  
}

const result = addTwoNumbers(5, 3)

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh"));
//    console.log(loginUserMessage());

   function calculateCartPrice(val1, val2, ...num1){
    // ...num1 (Rest or Spread operator)
    return num1
}
// console.log(calculateCartPrice(200, 400, 500,2000));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)

handleObject({
    username: "deependra",
    price: 200
})

const myNewArray = [200, 400, 600, 100]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 300, 4000]));


   







