// 1️. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2️. Print even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 3️. Print odd numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 4️. Factorial of a number
let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log("Factorial:", factorial);

// 5️. Sum of first 100 natural numbers
let lastNum = 100;
let sumNatural = (lastNum * (lastNum + 1)) / 2;
console.log("Sum of 1-100:", sumNatural);

// 6️ .Sum and average of array elements
let nums = [1, 2, 3];
let sumArr = 0;
for (let i = 0; i < nums.length; i++) {
  sumArr += nums[i];
}
let avgArr = sumArr / nums.length;
console.log("Sum:", sumArr);
console.log("Average:", avgArr);

// 7️. Square pattern of stars 
let squareSize = 5;
for (let i = 1; i <= squareSize; i++) {
  let line = "";
  for (let j = 1; j <= squareSize; j++) {
    line += "*";
  }
  console.log(line);
}

// 8️. Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 9️. Print first 10 natural numbers
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// . Check if first and last elements are the same in an array
let arrCheck = [10, 20, 30, 10];
if (arrCheck[0] === arrCheck[arrCheck.length - 1]) {
  console.log(true);
} else {
  console.log(false);
}

// 1️1. Print numbers divisible by 5 
for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// 1️2. Check if a character is a vowel
let char = "L";
switch (char.toLowerCase()) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    console.log("vowel");
    break;
  default:
    console.log("consonant");
}


// 1️3. Count even and odd numbers between 10 to 55
let evenCount = 0;
let oddCount = 0;
for (let i = 10; i <= 55; i++) {
  if (i % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}
console.log("Even:", evenCount);
console.log("Odd:", oddCount);

// 1️4. Print 1 to 25 excluding multiples of 5
for (let i = 1; i <= 25; i++) {
  if (i % 5 !== 0) {
    console.log(i);
  }
}

// 1️5.Factorial of each element in an array
let arrayNums = [3, 3, 2];
for (let i = 0; i < arrayNums.length; i++) {
  let fact = 1;
  for (let j = 1; j <= arrayNums[i]; j++) {
    fact *= j;
  }
  console.log(`Factorial of ${arrayNums[i]}:`, fact);
}

// 1️6. If sum of two integers is > 500, print their product
let val1 = 10;
let val2 = 700;
if (val1 + val2 > 500) {
  console.log("Sum is above 500:", val1 + val2);
  console.log("Product:", val1 * val2);
}

// 1️7. Greatest of two numbers
let num1 = 3;
let num2 = 7;
if (num1 > num2) {
  console.log("num1 is greatest");
} else {
  console.log("num2 is greatest");
}

// 1️8. Greatest of three numbers
let n1 = 3, n2 = 7, n3 = 30;
if (n1 > n2 && n1 > n3) {
  console.log("n1 is greatest");
} else if (n2 > n1 && n2 > n3) {
  console.log("n2 is greatest");
} else {
  console.log("n3 is greatest");
}

// 1️9.Separate positive and negative numbers from array
let mixArr = [23, 4, -6, 23, -9, 21, 3, -45, -8];
let positives = [];
let negatives = [];

for (let i = 0; i < mixArr.length; i++) {
  if (mixArr[i] >= 0) {
    positives.push(mixArr[i]);
  } else {
    negatives.push(mixArr[i]);
  }
}

console.log("Positive numbers:", positives);
console.log("Negative numbers:", negatives);
