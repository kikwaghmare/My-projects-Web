//question 1. What are Promises and why do we need them ?

// Promises are used to handle asynchronous operations in JavaScript. They are easy to manage 
// when dealing with multiple asynchronous operations where callbacks can create callback hell leading to 
// unmanageable code. It also allows us to make API calls or fetch data from Web Servers successfully. If not 
// able to do so fetches us with an error message

//It consists of two parts - Producer and Consumer
// it has three stages
//1. Pending
//2. Resolved(fulfilled)
//3. Rejected

const getId = new Promise((resolve,reject) =>{ //Producer// resolve and reject are execution functions
    setTimeout(() =>{
        let id = [a,b,c,d,e];
        resolve(id);
        reject("Error in fetching the details");
    }, 2000);
})

getId      //consumer
.then((data) =>{     //for resolve it is always .then
    console.log("the data resolves is",data);
})
.catch((error) =>{    //for reject it is always .catch
    console.log(error);
})
.finally(()=>{
    console.log("Promise is ended");
})


//Question 2 - What is the purpose of async/await keywords?

//  Async/Await are used to handle promises more efficiently. The word async before a function 
// always means that the function always returns a PROMISE. So, we therefore use async before the function name
//  to return a promise instead of a value. 

// // Await is used to wait for the result that is to be returned from the promise. So, we use await 
// when we are calling a function which returns a promise. Also, we can use them(Async/Await) for making
//  API calls.

// // Await is always used with the keyword async.

async function tryingPromises (){
    console.log("I am inside the function using async/await"); //3
    const response = await fetch("https://api.github.com/users") //4th  line inititated but not finished
    console.log("before the response is fetched");
    const users = await response.json();
    console.log("Users resolved");

    return users;
}

console.log("Before calling the function"); //1
let data = tryingPromises() //2 new promises(resolved, rejected)
console.log("After calling the function");
console.log("data recieved", data);
data.then((res) =>{
    console.log(res);
})

console.log("End of Code");

//Question 3- What is hoisting ?

//Hoisitng is when we decalre functions, variables to the top of the code before execution of the code.
// var variables support hoisting whereas const and let does not support hoisting.

x = 20;
console.log(x);
var x;

//Question 4 - What is DOM ?

//Document Object Model(DOM) is a platform & language nuetral interface
// that allows programs and scripts to dynamically access and update the 
//content, structure and style of a document.
//The DOM represents the document as nodes and objects; that way, programming languages can interact with the page

//Question 5. What is the difference between undefined and not defined vs NaN

//The main difference between undefined and not defined is the declaration and initialization

//undefined means the variabel is defined but not initialized

// example of undefined

let x ;
if (x < 3){
    console.log("X is smaller than 3");
}
else{
    console.log("X is greater than 3");
}

//Not defined means the variabel has not yet been decalred nor initialized

// example

function numbers() {
    const num1 = 2;
    const num2 = 3;
    return num1 + num2;
  }
  console.log(num1) //num1 is not defined

  //NaN - Not a number
  //if the output is not a number or cannot be represented as a number the the NaN will be showm



  //Question 6 - How many opertors do we have in Javascirpt ?

  //There are differnet types of operators in javascript. the most commonly used are

  //a) Arthmetic Opertaors - '+' , '-' , '*','/','%','++','--'
  //b) Comparison Operators - '==','!=','<=','>=','<','>'
  //c) Bitiwse Operators - '&','|','^','~','<<','>>'
  //d) Logocal Operators - '&&','||','!'
  //e) Assignment Operators - '=','+=','-=','*=','/='
  

  //Questions 7 - What is callback hell ?
  //Callbak hell is the situation in which we have complex nested callback functions that are dependant on each other.
  //Each callback takes arguments that have been obtained as a result of the previous callbacks
  //this tyoe of code structure makes it difficult to manage and maintain

//Question 8 - Explain promise chaining
//Promise chaining is a syntax that allows us to chain multiple asynchronous tasks together in a promise in a specified order
// It is used for a complex code where one asynchrnous task needs to be executed after the execution of a different asynchrnous task/
// Promise chain has multiple .then handles (multiple returns)

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});

p.then((result) => {
    console.log(result);
    return result * 2;
}).then((result) => {
    console.log(result);
    return result * 3;
}).then((result) =>{
    console.log(result);
    return result*4;
}).catch((err) =>{
    console.log("error is fetching results");
}).finally(() =>{
    console.log("Promise ended");
})

//Question 9 - What are arrow function
//The most commmon used functions in Javascript and is a compact alternative to the traditional function expression
//Arrow functions were introduced in ES6
//Arrow functions allow us to writer shorter function syntax

const ArrowFunction = (a,b) =>{
    console.log(a+b);
}
ArrowFunction(3,5)


//Question 10. Give an example of Async/Await

//Shows in Question 2