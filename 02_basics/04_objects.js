// Singleton Object
// const tinderUser = new Object()

// Non Singleton Object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUSer = {
    email: "some@google.com",
    fullname:{
        userfullname:{
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUSer);
// console.log(regularUSer.fullname.userfullname);
// console.log(regularUSer.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } 

// const obj4  = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {

    },
    {

    },
]

console.log(users[1].gmail);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));








