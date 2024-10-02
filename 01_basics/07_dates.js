// Dates

const myDate = new Date();

// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());
// console.log(myDate.getMonth());
// console.log(myDate.getMinutes());
// console.log(myDate.getTime());

// console.log(myDate.getTimezoneOffset());

// console.log(typeof myDate);
// let myCreatedDate(2024, 9, 2);
// let myCreatedDate = new Date(2024, 9, 2, 10, 2, 11)
// let myCreatedDate = new Date("2024-10-02")
let myCreatedDate = new Date("10-02-2024")
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));

// ` ${myCreatedDate.getDay()} and the time `

let newDate = new Date()
console.log(newDate.toLocaleString('default', { weekday: "long"}));





