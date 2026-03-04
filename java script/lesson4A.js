// Functions of parameters
// Parameters are values that get passed as arguments when we invoke a function
// They help us to create functions that can be reusable through out the  program

function greeting(name){
    console.log("hello", name , "how have you been")
}

greeting("jermaine chadiva")
greeting("jhon james")
greeting("morgan freeman")

console.log("==================================")


// Below is a function with  parameters to calculate the sum of two numbers
function addition(number1, number2){
    sum = number1 + number2
    console.log("The sum of the two numbers:", sum)
}

addition(45,57)

console.log("===================")

function area(base, hieght){
    area = 1/2*base*hieght
    console.log("The area is:", area, "cm\u00B2")
}

area(20,12)

console.log("===================")
// find the simple interest given the principal as 50000, rate 5% and the time 8yrs
function simpleinterest(principal,rate,time){
    simpleinterest = principal*rate*time
    console.log("The simple interest is:", simpleinterest,"ksh")
}

simpleinterest(50000,5/100,8)
