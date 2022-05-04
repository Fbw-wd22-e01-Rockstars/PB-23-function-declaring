// # Declaring Functions 

// #### 1. Multiply - Function Declaration
// * Create a function that multiples a number by another number.

/* function multiply(number1,number2){
    console.log(number1*number2)
}

multiply(3,3)
multiply(4,6) */

// #### 2. Multiply - Function Declarations as Values
// * Rework the syntax of the above function so that the function declaration is stored as a value.

/* const multiply = function(number1,number2){
    console.log(number1*number2)
}
multiply(5,4) */

// #### 3. Multiply - Arrow Function
// * Rework the syntax of the function declaration so that is uses the arrow function shorthand.

const multiply = (number1,number2)=>console.log(number1*number2)
multiply(5,4)

// #### 4. Declarations
// * Create functions (using all three declarations) to check the remainder of division given two numbers. 

/* function checkRemainderDivision(num1,num2){
    console.log(num2%num1)
}
const checkRemainderDivision = function (num1,num2){
    console.log(num2%num1)
}
const checkRemainderDivision =  (num1,num2)=>console.log(num2%num1) */
