// 1.Create one function with zero parameter having a console statement :
const Hello = function(){
    return "Hello"; 
   }
   Hello()

// 2.Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7":
   function Calc_sum(x,y){
    var sum = x+y;
    console.log(sum);
   }
   Calc_sum(3,4);

// 3.Create one arrow function :
    const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  }; 

// 4."Print output: 
//var x = 21;
//var girl = 21 () {
  //  console.log(x);
    //var x = 20;
//};
//girl ();

// 4."Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
 // undefined

//5. "Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};
// undefined
// 21


//6. "Print output
var x = 21;
a();
b();
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};
// ReferenceError : a is not defined


// Write a function that accepts parameter n and returns factorial of n

 function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
  }