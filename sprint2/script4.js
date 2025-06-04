const checkNumber = n => n > 0 ? "Positive" : n < 0 ? "Negative" : "Zero";
 console.log(checkNumber(0));   
 //2
    
const checkEvenOdd = n => n % 2 === 0 ? "Even" : "Odd";
console.log(checkEvenOdd(7));
//3

function power(base, exponent) {
  return base ** exponent;
}

console.log(power(2, 3));
//4

function compare(a, b) {
  if (a > b) {
    console.log(`${a} is greater than ${b}`);
  } else if (a < b) {
    console.log(`${a} is less than ${b}`);
  } else {
    console.log(`${a} is equal to ${b}`);
  }
}


compare(5, 3);
//5
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2025)); 
//6
function assignGrade(score) {
  if (score >= 90 && score <= 100) {
    return 'A';
  } else if (score >= 80 && score <= 89) {
    return 'B';
  } else if (score >= 70 && score <= 79) {
    return 'C';
  } else if (score >= 60 && score <= 69) {
    return 'D';
  } else if (score < 60) {
    return 'F';
  } else {
    return 'Invalid score';
  }
}


console.log(assignGrade(95)); 
//7
function ageMessage(age) {
  if (age < 16) {
    return "You can't drive.";
  } else if (age <= 17) {
    return "You can drive but not vote.";
  } else if (age <= 24) {
    return "You can vote but not rent a car.";
  } else {
    return "You can do pretty much anything.";
  }
}

// Example usage:
console.log(ageMessage(15));
console.log(ageMessage(16)); 
console.log(ageMessage(20)); 
console.log(ageMessage(30)); 
//8
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
//9
const year=2025

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}


