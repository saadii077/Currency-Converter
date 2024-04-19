#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";
import chalkAnimation from "chalk-animation";

async function welcome() {
  let title = chalkAnimation.rainbow(
    "\n \tWelcome to Code With Saad - Currency_Converted\n"
  );
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  title.stop();
}
await welcome();

const Currency: any = {
  USD: 1,
  EUR: 0.91,
  GBD: 0.76,
  INR: 74.57,
  PKR: 280,
};

let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter from Currency",
    type: "list",
    choices: ["USD", "EUR", "GBD", "INR", "PKR"],
  },
  {
    name: "tO",
    message: "Enter TO Currency",
    type: "list",
    choices: ["USD", "EUR", "GBD", "INR", "PKR"],
  },
  {
    name: "amount",
    message: "Enter Your Amount",
    type: "number",
  },
]);

let fromAmount = Currency[user_answer.from];
let toAmount = Currency[user_answer.tO];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;

console.log(
  chalk.yellow`converted Amount  ${chalk.green(convertedAmount.toFixed(2))}`
);
