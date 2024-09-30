// console.log( 2 > 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
/*
The reason is that an equality chech == and comparision
> < >= <= work differently.
Comparision convert null to a number, treating it as 0.
That why (3) null >= 0 is true and null > 0 is false.
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined > 0);

// === Strict check it check data as well as datatype

console.log("2" === 2);
