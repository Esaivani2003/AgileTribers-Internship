// 1. sayHello function with optional name parameter
function sayHello(name) {
  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log("Hello, World!");
  }
}
sayHello();          
sayHello("Alice");    

// 2. returns sum of two numbers
function add(a, b) {
  return a + b;
}
console.log(add(3, 5));  

// 3. multiply function expression
const multiply = function (x, y) {
  return x * y;
};
console.log(multiply(4, 5)); 

// 4. multiply function declaration
function multiplyFunc(a, b) {
  return a * b;
}
console.log(multiplyFunc(6, 6));  

// 5. divide function
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}
console.log(divide(10, 2));  
console.log(divide(5, 0));  

// 6. factorial function
function factorial(n) {
  if (n < 0) return "Error: Negative number";
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
console.log(factorial(5));  

// 7. square function
function square(num) {
  return num * num;
}
console.log(square(4));  
