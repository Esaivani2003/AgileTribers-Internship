const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculate(a, b, operation) {
  if (isNaN(a) || isNaN(b)) {
    return "Inputs must be valid numbers.";
  }

  switch (operation) {
    case "+":
      return `Result: ${a + b}`;
    case "-":
      return `Result: ${a - b}`;
    case "*":
      return `Result: ${a * b}`;
    case "/":
      if (b === 0) return "Cannot divide by zero.";
      return `Result: ${a / b}`;
    default:
      return "Invalid operation. Use +, -, *, or /";
  }
}

rl.question("Enter first number: ", (a) => {
  rl.question("Enter second number: ", (b) => {
    rl.question("Enter operation (+, -, *, /): ", (operation) => {
      const numA = parseFloat(a);
      const numB = parseFloat(b);
      const result = calculate(numA, numB, operation);
      console.log(result);
      rl.close();
    });
  });
});
