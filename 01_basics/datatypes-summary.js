// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const value = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 23445532325954545n // BigInt

// Reference Type (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObjOne = {
    name: "Deependra",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof id);