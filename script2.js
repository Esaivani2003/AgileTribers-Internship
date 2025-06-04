//ex-1 
// camelcase
var userName="a";
//underscore case
var user_details="teacher"
console.log(userName +" is " +user_details);
//ex-2
//implemented const reassign then type error
 //ex-3
 const arr=[1,2,2.3,"fruits"];
 console.log(arr);
 console.log(arr[1]);
 arr.push("a")
 arr.unshift(1)
 console.log(arr)
 arr.shift(1)
 arr.pop("a")
 console.log(arr)
 //ex-4
 num1=4;
 num2=5;
 total=num1+num2
 console.log(total)
 //ex-5
 //area of circle
pi=3.14159;
r=7
circle=pi*r*r;
console.log(circle)
//ex6
//area of rectangle
l=3
w=2
Rectangle=l*w
console.log(Rectangle)
//ex7
//area of trianglee
base=3
h=2
triangle=base*h/2
console.log(triangle)
//ex8
//basic calculator
function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
    case 'x':
      return num1 * num2;
    case '/':
      if (num2 === 0) return "Error: Division by zero!";
      return num1 / num2;
    default:
      return "Invalid operator! Use +, -, *, or /";
  }
}


console.log(calculator(10, 5, '+')); 
console.log(calculator(10, 5, '-')); 
console.log(calculator(10, 5, '*')); 
console.log(calculator(10, 5, '/')); 
console.log(calculator(10, 0, '/')); 
//ex9
let num = 10;
console.log(num);
num += 5;
console.log(num);
num -= 3;
console.log(num);
num *= 2;
console.log(num);
num /= 4;
console.log(num);

//ex10
let count = 5;
console.log(count);
count++;
console.log(count);
count--;
console.log(count);
//ex11
let a = 10;
let b = "10";

console.log(a == b);   
console.log(a != b);   
console.log(a === b);  
console.log(a !== b);  
console.log(a > b);   
console.log(a < b);    
console.log(a >= b);  
console.log(a <= b); 
//eg12
let isSunny = true;
let hasUmbrella = false;

console.log(isSunny && hasUmbrella);
console.log(isSunny || hasUmbrella);
console.log(!isSunny);
console.log(!hasUmbrella);

//ex13
let one = 5;
let two = 10;

one =one + two;
two = one - two;
one = one - two;

console.log(one);
console.log(two);
//ex14
let x = 10;
let y = 20;
let avg = (x + y) / 2;
console.log(avg);
//ex15
let i = 5;
let j = 3;
let k = 4;
let m = 2;

let result = ((i + j) * k) / m;
console.log(result);
//ex16
var tamil=100;
var english=80;
var maths=89;
var science=90;
var social=100;
var sum=tamil+english+maths+science+social;
var average =sum/5;
console.log(average);
console.log(sum)

