// Filter, map and reduce
// const coding = ["js", "ruby", "java", "python", "cpp"]

// const value = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })

// console.log(value);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filter method

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// console.log(newNums);

// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8,9, 10]

// map method

// const newNumbers = myNumbers.map( (num) => num + 10 )

// const newNums = myNumbers
//                  .map( (num) => num * 10 )
//                  .map((num) => num + 1)
//                  .filter((num) => num >= 40)

// console.log(newNums);

// reduce method

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc,currval) {
//      console.log(`acc: ${acc} and currval: ${currval}`);
//      return acc + currval
// }, 0)


const myTotal = myNums.reduce( (acc,curr) => acc+curr, 0 )
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "Python",
        price: 3499
    },
    {
        itemName: "DSA",
        price: 3999
    },
    {
        itemName: "Mobile dev course",
        price: 4999,
    },
    {
        itemName: "data analyst course",
        price: 12999,
    }, 
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0)
console.log(priceToPay);


