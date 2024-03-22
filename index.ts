#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: chalk.yellow("Enter first number "), type: "number", name: "FirstNumber" },
  { message: chalk.yellow("Enter second number"), type: "number", name: "SecondNumber" },
  {
    message: chalk.green("select one of the operators to perform operation"),
    type: "list",
    name: "operator",
    choices:[
      "Addition",
      "Substraction",
      "Multiplication",
      "Division",
      "Exponentiation",
      "Modulus"]
    
    }
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
  console.log(chalk.red("Error"));
}
