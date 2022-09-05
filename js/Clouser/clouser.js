//Question 1

function counter(){
    var counter = 0;

    function IncreaseCounter(){
        return counter += 1;
    }
    return IncreaseCounter;
}

var counter = counter();
//output:
// alert(counter()); // 1
// alert(counter()); // 2
// alert(counter()); // 3
// alert(counter()); // 4

//Question 2

let count = 0;
(function(){
    if(count === 0){
        let count = 1;
        console.log(count); 
        // output 1
    }
    console.log(count); 
    // output 0
})();

//Question 3

for (var i = 0; i<3 ; i++){
setTimeout(function log(){
    console.log(i);
},
1000 );
} 
//Output
3
3

//Question 4
// Write a  code to calculate area of a rectablge using inner functions. In this case outer function should 
// accept parameter length and inner functions should accpet parameter breadth

const rectangle = (length) => {
    breadth = function(breadth) {
        console.log("Area of the rectangle is = Length * Breadth =" + " " + length * breadth);
    }
};
rectangle(5);
breadth(3)

//Question 5
//Take a variable in outer function and create inner function to increase the counter everytime is is called

const outer = () => {
    let counter1 = 0;
    inner = function(){
        return counter1++;
    };
    console.log(`${counter1}`);
};

const counter2 = outer();
counter2(); //1
counter2(); //2
counter2(); //3


//Question 6

var a = 12;
(function(){
    alert(a);
})(); //output 12


//Question 7
var a = 10;
var x = (function(){
    var a =12;
    return function(){
        alert(a);
    }
})();
x(); // output 12

//Question 8

var globalVar = "xyz";

(function outerFunc(outerArg) {
  var outerVar = "a";

  (function innerFunc(innerArg) {
    var innerVar = "b";

    console.log(
    "outerArg = " + outerArg + "\n" +
    "innerArg = " + innerArg + "\n" +
    "outerVar = " + outerVar + "\n" +
    "innerVar = " + innerVar + "\n" +
    "globalVar = " + globalVar );
  })(456);
})(123);

//Output
// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz