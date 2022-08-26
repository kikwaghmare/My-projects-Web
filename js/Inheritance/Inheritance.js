
  // 2. Write code to explain prototype chaining
  function Car(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  const myCar = new Mobile("HUNDAI", "CRETA");
  console.log(myCar.hasOwnProperty("brand")); 
  
  // 3. Add a method to calculate sum of all elements in Array in array's prototype, use that method to calculate sum for multiple arrays
  const numbers = [40, 20, 30, 40, 50]; 
  Array.prototype.total = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
      sum += this[i];
    }
    console.log(sum);
  };
  numbers.total(); 

  
  // 4. Write a JavaScript function to retrieve all the names of object's own and inherited properties.
  const Parent = {
    name: "Kartik",
    age: 100,
  };
  
  child = Object.create(Parent);
  child.birthYear = 1923;  
  for (const key in child) {
    console.log(key);
  }

  // 1. Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype
const parent = {
    name: "Kartik",
    printName: function () {
      console.log(this.name);
    },
  };
  
  const child = Object.create(parent);
  child.printName();