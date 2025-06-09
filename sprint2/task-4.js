// 1. Check if number is positive or negative
let num = -5;
if (num >= 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}
// 2. Check if number is even or odd
let number = 7;
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
// 3. Calculate power of a number
let base = 5;
let exponent = 2;
let power = base ** exponent;
console.log("Result:", power); 
// 4. Compare two numbers
let a = 10, b = 20;
if (a > b) {
  console.log("a is greater");
} else if (b > a) {
  console.log("b is greater");
} else {
  console.log("Both are equal");
}
// 5. Check if a year is a leap year
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}
// 6. Grade calculator
let score = 85;
if (score >= 90) console.log("Grade: A");
else if (score >= 80) console.log("Grade: B");
else if (score >= 70) console.log("Grade: C");
else if (score >= 60) console.log("Grade: D");
else console.log("Grade: F");
// 7. Age-based message
let age = 20;
if (age < 16) console.log("You can't drive.");
else if (age < 18) console.log("You can drive but not vote.");
else if (age < 25) console.log("You can vote but not rent a car.");
else console.log("You can do pretty much anything.");
// 8. FizzBuzz from 1 to 100
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}
// 9. Leap year checker
let y = 2024;
if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
  console.log(`${y} is a leap year`);
} else {
  console.log(`${y} is not a leap year`);
}

