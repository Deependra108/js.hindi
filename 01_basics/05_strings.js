"use strict"

const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc');

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('t'));
// console.log(gameName.replace('i','e'));
// console.log(gameName);

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-10, 4);
console.log(anotherString);

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));

console.log(gameName.split('-'))


