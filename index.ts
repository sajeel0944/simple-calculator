#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number ", type: "number", name: "FirstNumber" },
  { message: "Enter second number", type: "number", name: "SecondNumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Substraction",
      "Multiplication",
      "Division",
      "Exponentiation",
      "Modulus",
    ],
  },
]);

//condition statement

if (answer.operator === "Addition") {
  console.log(answer.FirstNumber + answer.SecondNumber);
} else if (answer.operator === "Substraction") {
  console.log(answer.FirstNumber - answer.SecondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.FirstNumber * answer.SecondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.FirstNumber / answer.SecondNumber);
} else if (answer.operator === "Exponentiation") {
  console.log(answer.FirstNumber ** answer.SecondNumber);
} else if(answer.operator === "Modulus") {
  console.log(answer.FirstNumber % answer.SecondNumber);
} else {
  console.log("Error");
}
