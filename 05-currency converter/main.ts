import inquirer from  "inquirer";
import chalk from "chalk";

console.log(chalk.red.bold("\n\t \t \t ...CURRENCY CONVERTER...\n"));


let exchangeRate: any = {
    "USD": 1,
    "EUR": 0.9,
    "JYP":113,
    "CAD":1.3,
    "AUD": 1.65,
    "PKR": 280,
}


let userAnswer = await inquirer.prompt([
    {
        name: "From_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },

    {
        name: "To_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },

    {
       name:"Amount",
       type: "input",
       message: "Enter the amount to convert:"
    }
]);


let fromAmount = exchangeRate[userAnswer.From_currency];
let toAmount = exchangeRate[userAnswer.To_currency];
let amount = userAnswer.Amount


let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount


console.log(`Converted Amount = ${chalk.green(convertedAmount.toFixed(2))}`);

