//Question 1

var heading = document.getElementById("addtext");
var click = document.getElementById("button1");

click.addEventListener('click', function(){
    heading.innerText = "MERNS stack";
})

//Question 2
let firsth1 = document.getElementsByTagName('h1')[0];
console.log(firsth1);


//Question 3

// // function showRealTime(){
setInterval(() =>{
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minute');
    let secs = document.getElementById("secs");
        const date = new Date();
        hours.innerText = date.getHours();
        minutes.innerText = date.getMinutes();
        secs.innerText = date.getSeconds();
        console.log(hours, minutes, secs);
    }, 1000)
// };
// // showRealTime();
    

//Question 4

var hello = document.getElementById("hello")
var button2 = document.getElementById('button2')

button2.addEventListener('click', function(){
    hello.innerText = "Welcome to Elevation Academy"
})


//Question 5

$('#hide').click(function(){
    $('#changeText').hide();
})

$('#unhide').click(function(){
    $('#changeText').show();
})

//Question 6

function FindZero(arr, n)
{
    let count = 0;
    for(let i=0;i<=n;i++){
        if(arr[i] == 0)
        count ++
    }
    console.log(count);
}

let arr = [ 0,1,1,0,0,0,1,0,0,0];
let n = arr.length;

FindZero(arr,n)

// alternate way

let array = [1,0,1,0,1,0];
let count=0;
for(let i of array){
    if(i == 0){
         count=count+1;
    }
}

console.log(count);



//Question 7

//----------1st method---------

let arraY = [2, 3, 5, 16, 8, 7, 10, 9, 200];
let even = 0;
let odd = 0;
for(let i of arraY)
if(i%2==0){
    even++
}
else{
    odd = odd + 1;
}

console.log("The even count is" + even);
console.log("The odd count is" + odd);

//---------2nd method---------

let arrAy = [2,3,4,5,6];
let x=0;
let a=0;
for(let i=0 ; i<arrAy.length ; i++ ){
    if(arr[i]%2==0){
        x=x+1;
    }
    else{
        a=a+1;
    }
}
console.log(x);
console.log(a);


//Question 8

let arrNum = [2,3,4,5,6];
let u=0;
let v=0;
for(let i=0 ; i<arrNum.length ; i++ ){
    if(arr[i]%2==0){
        u=u+1;
    }
    else{
        v=v+1;
    }
let vowels = ["a","e","i","o","u"];

let str = "hi folks";

var S=0
for(let s of str){
    if(vowels.includes(s)){
          S=S+1;
    }
}
}
console.log(S);



//Question 9

let obj1 = {
    first: "Hello",
    second: "This is to compare"
}

let obj2 = {
    first: "Hello",
    second: "This is to compare"
}

const CompareStrings = (ob1,ob2) => {
    let array1 = obj1;
    let array2 = obj2;

    if(array1.length != array2.length){
        return "Not equal"
    }
    
    for(let l=0; l<=array1.length; l++){
        if(array1[i] != array2[i]){
            return "not Equal"
        }
    }
    return "the arrays are equal";
};

CompareStrings(obj1,obj2);