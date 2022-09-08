/**
 * 1. What is the Dfirrence between "==" and "===" operators.
the maine difference between these two operators is that the "==" operator compares only the value between two variables 
whereas the "===" operatos compares the value and also the data type between two variables.
​**/
var x = 10;
console.log(x == "10"); // true because value of x = 10;
console.log(x === "10"); // false because the data type of x is not a string
​
/** 2. What is a spread operator
The spread opertor is a new addition to the set of operators in javascript. This opertors takes oan iterable(eg an array) and expands it into individual elements
This opertor is commonly used to main copies of objects and arrays to make it more readable and concise
​**/
const arrayOne = ["a","b","c"];
const arrayTwo = [1,2,3];
const CombineArray = [...arrayOne,...arrayTwo];
console.log(CombineArray); // ['a', 'b', 'c', 1, 2, 3]
​
/** 3. What is the differnece between var, let and const?

 var, let and const are javascript keywords used to declare variables
​
var - The var is global scoped, that means it can be accessible everywhere in the program. Global scope is the entire environment of Javascripte execution.
The var variables can be assigned new values or also redeclare the same varabel again i.e one can define a new value to the same var variable multiple times 
The var variables allow hoisting  **/
examples of var 
​
function f1(){
    var x = 150;
}
console.log(x); //output is 150 as var is global scoped
​
var x = 20;
console.log(x);
var x = 100;
console.log(x); // output -  20 100 -  this shows that var can be redeclared again
​
x = 120;
console.log(x);
var x; // output - 120 - this is an example of hoisting .i.e. x is defined before decalring it
​
//let - let is block scoped .i.e. it is only accessbile within the blocks they are declared in
//let can only be declared once but its value can be changed
//let variables does not support hoisting
// examples of let
​
function f2(){
    let i = 100;
}
console.log(i); // output - Reference Error - i is not defined because let is block scoped so it can be defined only within funcion f2
​
let i = 5;
console.log(i);
let i = 10;
console.log(i); // Syntax Erros- i has already been declared. This shows that let can be decalred only once
​
let x = 5;
let y = 50;
x = x + y;
console.log(x); // output - 55 - value of let can be changed
​
x = 120;
console.log(x);
let x; // Reference Error - does not support hoisting
​
//const- const is block scoped
//const can be declared once and its value cannot be changed
//const does not support hoisting
//examples
​
function f2(){
   const i = 100;
}
console.log(i); // Reference Error- const is block scoped
​
const u = "Hello";
console.log(u);
const u = "Good Morning";
console.log(u); // Syntax error - u has already been declared
​
k = "Hello world";
console.log(k);
const k; //syntax error - Missing initializer in const declaration
​
/** Question 4.  What is the execution context
execution context is the environment created by javascript to exceute code.
it contains the code that is currently running and also everything that is neede to run the code
when a code runs -  an imaginary box is created which is called the execution context. It has two blocks -  the creation phase(memory) and execution phase(code)
There are mainly two types of execution context
i) Golbal execution context - This is the primary execution context
ii) Function Execution Context- whenever a funnction is alloted a memory in the creation phase, a new function execution context is created to execute the code inside the function
​**/
​
/** Question 5. What is creation phase and execution phase
in the creation phase, the variable are allocated a memory but does not start its execution
Any variable in the creation phase will not have a value and tis value is undefined
A function is copied as it is and given a memory in this phase.
In the excution phase, the code is executed. The values of the variabels are updated
when the functions are executed, a new function execution context is created toe execute the code inside the function
**/
/** Question 6. What is meant by first class fucntions
A function is said to be first class function if it is treated like other variables. These functions can be stored as a value in a variable
The functions can be passed as an argument to another functions and can also be returned by another function
In JS, they are also called firs-class citizens
these functions are simply a value and are just another type of object
​**/
function sum(a,b){
    return a + b;
}
let res = sum; // storing a fucntion in a variable
sum(10,20) 
​
const func1 = (a) {
    console.log(a);
}
​
function abc(){
    console.log("I am function");
}
​
func1(abc); // passing function abc as an argument in func1
​/**
//Question 7. What are Closures ? Give an example
closures is a situation which arises when an inner function stores the values of an outer function even after the outer function has been executed and erased.
closures makes a fucntion remmeber all the variables taht existed in the function birth place initially. 
Any function always have access to the variable environment of the execution context in which the function was created.
​**/
const ticketBooking = function (){
    let passengerCount0 = 0;
    let passengerCount1 = 0;
    return function(){
        //let passengerCount = 0; //only for once and then this will dwarf
        passengerCount0++;
        passengerCount1++;
        console.log("the count of the passengers are ${'passengerCount0'} ${'passengerCount1'}");
    }
}
​
const bookie = ticketBooking ();
// const bookie = function(){ --- }
​
console.log(bookie); //fn defn
console.dir(bookie);
bookie(); // the count of passengers are 1 1
bookie(); // the count of passengers are 2 2
bookie(); // the count of passengers are 3 3