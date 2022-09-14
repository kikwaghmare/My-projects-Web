// Ques 1: What is a Temporal Dead Zone?

// A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value. 

                                    //or

// The let and const variables are not accessible before they are initialized with some value, and the phase between the starting of the execution of block in which the let or const variable is declared till that variable is being initialized is called Temporal Dead Zone for the variable.                                 



//-------------------------------------------------------------------------------------------------------------



// Ques 2:-What is the for-in loop in JavaScript? Give its syntax


// The for-in loop is a special type of a loop that iterates over the properties of an object, or the elements of an array. The generic syntax of the for-in loop is:

// syntax
// for(variable in object) {
//     // Code to be executed
// }


//-------------------------------------------------------------------------------------------------------------




//Ques:3 Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript

// Local Scope:- Local Scope occurs when you create a variable inside a function. By doing that, the visibility and accessibility of the variable is only allowed within that function.


// Block Scope:- A block scoped variable means that the variable defined within a block will not be accessible from outside the block. A block can reside inside a function, and a block scoped variable will not be available outside the block even if the block is inside a function.

// Function Scope:- Variables that are declared inside a function are called local variables and in the function scope.Local variables are accessible anywhere inside the function. Block scope: Variable that is declared inside a specific block & can't be accessed outside of that block.

// Scope chain:- It is the process in which, JavaScript engine searches for the value of the variables in the scope of the functions. However, the search is in a lexical manner. First of all the engine looks out in the current scope of the current function. If not found, it finds it in the parent funtion.



//-----------------------------------------------------------------------------------------------------------




//Ques 4: What is difference between null and undefined and where to use what?

// null:- In JavaScript, null is a special value that represents an empty or unknown value. For example, let number = null; The code above suggests that the number variable is empty at the moment and may have a value later.

//undefined:- A variable that has not been assigned a value is of type undefined . A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned




//-------------------------------------------------------------------------------------------------------------

// Ques 5:- what is Symbol?

//Symbols are created with Symbol() call with an optional description (name). Symbols are always different values, even if they have the same name. It is a primitive data type and immutable data type.

//eg:- 
const sym1=symbol();
const sym2=symbol('sudhir');
const sym3=symbol('sudhir');
console.log(sym2);
console.log(sym1);
console.log(sym2===sym3);   // output:- false
//-------------------------------------------------------------------------------------------------------------





// Ques 6: - Write code to explain map and filter in arrays

// eg of map:-
const listOfNumber=[1,2,3,4,5,6,7,8,9]
const mappedNumber=listOfNumber.map(item=>item*2);
console.log(listOfNumber);
console.log(mappedNumber);


//eg of filter:-

const filteredNumber=listOfNumber.filter(item=>item>1)
console.log(filteredNumber);




//-------------------------------------------------------------------------------------------------------------

// Ques 7:-Explain passed by value and passed by reference?

// In Pass by value, parameters passed as an arguments create its own copy. So any changes made inside the function is made to the copied value not to the original value

// eg:-
function Passbyvalue(a, b) {
    let tmp;
    tmp = b;
    b = a;
    a = tmp;
    console.log(`Inside Pass by value 
        function -> a = ${a} b = ${b}`);
}
  
let a = 1;
let b = 2;
console.log(`Before calling Pass by value 
        Function -> a = ${a} b = ${b}`);
  
Passbyvalue(a, b);
  
console.log(`After calling Pass by value 
       Function -> a =${a} b = ${b}`);


// Pass by Reference: In Pass by Reference, Function is called by directly passing the reference/address of the variable as an argument. So changing the value inside the function also change the original value. In JavaScript array and Object follows pass by reference property.


// eg:-
function PassbyReference(obj) {
    let tmp = obj.a;
    obj.a = obj.b;
    obj.b = tmp;
  
    console.log(`Inside Pass By Reference 
        Function -> a = ${obj.a} b = ${obj.b}`);
}
  
let obj = {
    a: 10,
    b: 20
  
}
console.log(`Before calling Pass By Reference 
    Function -> a = ${obj.a} b = ${obj.b}`);
  
PassbyReference(obj)
  
console.log(`After calling Pass By Reference 
    Function -> a = ${obj.a} b = ${obj.b}`);

//-------------------------------------------------------------------------------------------------------------


//Ques 8:- Please explain Self Invoking Function and its code

//A self-invoking (also called self-executing) function is a nameless (anonymous) function that is invoked immediately after its definition.

//                                          or

// Self-Invoking function is a type of function that is invoked or called automatically after its definition when followed by the parentheses set () and primarily used for the initialization tasks.


(function() {
    var foo = 3;
    console.log(foo);
  })();
  
  console.log(foo);

//-------------------------------------------------------------------------------------------------------------



  // Ques 9:- What is an event loop and call stack?

  // 
// //------> Call Stack
// // We can consider Call Stack as a kitchen where all our code executed or cooked. Whenever we try to run a piece of code, it goes to call stack first and then executed. It works in LIFO style. That is Last In First Out.




// // --------> Callback Queue
// // It's a guard who monitors the stack of asynchronous callback functions who just completed the task of waiting and passed the gate of Web API. Callback Queue works using FIFO (First In First Out ) method. And now, they waits here to go back to Call Stack. But how will Call Stack know that there's some callback functions waiting in Callback Queue?