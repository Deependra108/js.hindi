// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "hitesh",
    "fullName": "Hitesh Choudhary",
    [mySym]: "Key1",
    age: 20, 
    location: "Chhatarpur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}

// console.log(Jsuser.name);
// console.log(Jsuser["name"]);
// console.log(Jsuser.fullName);
// console.log(Jsuser["fullName"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "hitesh@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email = "hitesh@microsoft.com"

// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello Js User");
}

console.log(Jsuser.greeting());
console.log(Jsuser.greeting);

Jsuser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`);
}

console.log(Jsuser.greetingTwo());


