// 1. Hello World
console.log("Hello, World!");

// 2. Print Your Name
console.log("Esaivani");

// 3. Print Name and Age on Separate Lines
console.log("esaivani");
console.log(25);

// 4. Declare and Use Different Data Types
let str = "Hello";      
let num = 10;           
let bool = true;       
console.log(str, num, bool);

// 5. String Concatenation
let first = "esai";
let last = 25;
console.log("firstName: " + first + ", Lastname: " +last);

// 6. Declare and Print Variables
let myName = "vani";
let myAge = 25;
console.log(myName);
console.log(myAge);

// 7. Perform Mathematical Operations
let a = 10, b = 5;
console.log("Add:", a + b);
console.log("Sub:", a - b);
console.log("Mul:", a * b);
console.log("Div:", a / b);
console.log("Mod:", a % b);

// 8. Declare and Print an Array
let fruits = ["Apple", "Banana", "Cherry"];
for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 9. Print a Simple Pattern
for (let i = 1; i <= 4; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}


// 10. Declare and Modify Variables
let personName = "Alice";
let personAge = 20;
let isStudent = true;


// 11. Print and Modify Variable Values
console.log(personName, personAge, isStudent);
personName = "Bob";
personAge += 1;
isStudent = !isStudent;
console.log(personName, personAge, isStudent);

// 12. Store and Print Personal Details
let nameDetail = "Alice";
let ageDetail = 20;
let dobDetail = "2004-06-09";    
let heightDetail = 5.7;          
let weightDetail = 60.5;         
let degreeDetail = "B.Sc";
let genderDetail = "Female";

console.log(nameDetail, ageDetail, dobDetail, heightDetail, weightDetail, degreeDetail, genderDetail);
