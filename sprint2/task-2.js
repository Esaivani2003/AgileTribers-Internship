// 1. Variable Naming Conventions
let studentName = "John"; 
let student_age = 16;    

// 2. Const Reassignment
const PI = 3.14;
// PI = 3.14159; 

// 3. Array Operations
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]);      
fruits.push("Mango");        
fruits.push("guava");        
fruits.pop();                

// 4. Sum of Two Numbers
let a = 10, b = 20;
console.log("Sum:", a + b);

// 5. Area of Circle
let radius = 5;
let pi=3.14;
let circleArea = pi* radius * radius;
console.log("Circle Area:", circleArea);

// 6. Area of Rectangle
let length = 8, width = 6;
console.log("Rectangle Area:", length * width);

// 7. Area of Triangle
let base = 10, height = 5;
console.log("Triangle Area:", (base * height) / 2);

// 8. Simple Calculator
let x = 12, y = 4;
console.log("Add:", x + y);
console.log("Subtract:", x - y);
console.log("Multiply:", x * y);
console.log("Divide:", x / y);

// 9. Assignment Operators
let value = 10;
value += 5;   
value -= 3;  
value *= 2;   
value /= 4;  
console.log("Final Value:", value);

// 10. Increment & Decrement
let count = 5;
count++; 
count--; 
console.log("Count:", count);

// 11. Comparison Operators
let m = 10, n = "10";
console.log(m == n);   // true
console.log(m === n);  // false
console.log(m != n);   // false
console.log(m !== n);  // true
console.log(m > 5);    // true
console.log(m <= 10);  // true

// 12. Logical Operators
let isStudent = true, isAdmin = false;
console.log(isStudent && isAdmin); 
console.log(isStudent || isAdmin); 
console.log(!isStudent);           

// 13. Swap Two Variables
let p = 3, q = 7;
[p, q] = [q, p];
console.log("p:", p, "q:", q);

// 14. Average of Numbers
let num1 = 10, num2 = 20, num3 = 30;
let avg = (num1 + num2 + num3) / 3;
console.log("Average:", avg);

// 15. Combined Arithmetic Expression
let A = 10, B = 30, C = 12, D = 3;
let result = ((A + B) * C) / D;
console.log("Result:", result);

// 16. Total and Average of Subjects
let tamil = 80, english = 75, maths = 90, science = 85, social = 70;
let total = tamil + english + maths + science + social;
let average = total / 5;
console.log("Total:", total, "Average:", average);
