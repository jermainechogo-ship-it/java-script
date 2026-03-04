// object data typeses
// an object in javascript as a data type that stores data in form of key value pairs

let person = {
    name :  "jermaine",
    age : 70,
    isregistered : true

};
console.log("the deatails of the person is:", person)

// first method is by use of the square brackets
console.log(person["age"])

// second method is by use of the dot (.) notation
console.log(person.name)

// check data type
console.log(typeof(person))

// array data type
// This referrece to  collection of items that are on indexes
let fruits = ["mango", "pinaple", "apple", "mellon", "lemon"]

console.log("the entire array of fruits is",fruits)
// To access the items of an arrey we use the index
console.log(fruits[3])

// yoou can slice items in an arrey
// console.log(fruits,slice(2, 4))