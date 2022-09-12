//1.Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind()
//call()

//The call() method is a predefined Javscript method. It is used to call a function that belongs to one object to be assigned and called for a different object
//call():In this case of call each and every argument which is required to be passed to th function will be passed individually

console.log("call()");
let user = {
    name:"Sharat",
    age:25,
    city:"Gurugram"
}
let user1 = {
    name:"Ashwin",
    age:20,
    city:"Mangalore"
}

function ShowDetails(id ,designation){
    console.log("Hello",this);
    console.log(this.name + "is" + this.age + "years old",id," ",designation);
}
ShowDetails.call(user1,"14567","Software Developer");

console.log("---------------------------------------------------");

// apply(): This method is similar to call() but in apply the arguments in function are passed as array

console.log("apply()");

ShowDetails.apply(user,["199","HR"]);

console.log("---------------------------------------------------");

//bind():In case of bind ,it will return you a new function and this new function you can use anytime anywhere.

console.log("bind()");

const myFunc = ShowDetails.bind(user);
newFunction("543","Aerospace Engineer");

console.log("---------------------------------------------------");

//2.What are objects in javascript?
//in Javascript basically eveyrthing is an object, an object is an entity with property and type.

console.log("Objects");

const ObjName = {
    name:'Ankitha',
    age:29,
}

console.log('My name is' + ObjName.name + "and I am " + ObjName.age + 'years old');
console.log("----------------------------------------------------");

//3.What are function constructors?

//function constructors are special functions that creats and initializes and object intance of a class.
// in  JS, a constructor gets called when an object is created using a new keyword.
// function constructors are used to create a new object and sets its values of any existing object properties.

console.log("Function Constructor");

function Employee(name,salary){
    this.name = name,
    this.salary = salary
}

const person1 = new Employee('Priyanka',200000);
console.log(person1.name);

console.log("----------------------------------------------------");

//4.Explain prototypes
//5.What is prototype chain?

//Every object in Javascript has a built-in property which is called its prototype.
//The prototype is an object itself so a prototype will have its own prototype, which is called a prototype chain.

console.log("prototype and prototype chain");

function EmplyData(name,age){
    this.name = name;
    this.age = age;
    this.salary = 10000;
}

let data1 = new EmplyData("Salman",25);
let data2 = new EmplyData("shanthanu",22);

console.log(data1);
console.log(data2);



//in case ,if you want to add other properties by using function constructor:


data1.salary = 500000;
console.log(data1);

//in case when you want to add properties inside the function constructor

Data.prototype.Company = "Paytm";
data1.Company = "Acer";
console.log(data1.Nationality);

console.log("----------------------------------------------------");

//6.Give an example of inheritance using function constructor

console.log("Inheritence");

function Animal(name,color){
    this.name = name;
    this.color = color;
}

function AnimalDescription(name,color,age,sound){
    Animal.call(this,name,color);
    this.age = age;
    this.sound = sound;
}

let Animal1 = new AnimalDescription('Bruno','Dark',2,'Barks')
console.log(Animal.prototype);
console.log(Animal1);

console.log("----------------------------------------------------");


//7.What are callbacks?
//callback functions are those functions which are passed as an argument in nother function

console.log("callback");

function output(callback){
    console.log("out");
    callback()
};
function input(){
    console.log("in");
};
output(input);



console.log("callback with setTimeout");
function firstFunction(){
    setTimeout(function(){
        console.log("First function called");
    },1000);
}

function secondFunction(){
    console.log("Second function called");
}

firstFunction();
secondFunction();

console.log("----------------------------------------------------");

//8.What is the use of setTimeout
//The setTimeout is used to set a timer for the execution of a callback function.
//the function will be executed after the specified time
console.log("setTimeout");

setTimeout(function(){
    console.log("Hi everyone");
},3000)

console.log("----------------------------------------------------");

//9.What are pure functions?
//Pure functions are those functions that will always return the same result if the same type of srguments are passed

function calculateGST( productPrice ) {
    console.log(productPrice * 0.18);;
}
calculateGST(5);
calculateGST(10);

console.log("----------------------------------------------------");