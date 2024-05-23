import inquirer from "inquirer";
import chalk from "chalk";
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence:",
    },
]);
let words = answers.sentence.trim().split(" ");
//Analysis of user input sentence;
console.log(chalk.bold("\n \t \t \t. Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n \t \t \t. Word Count: ${chalk.bold.red(words.length)}\n`));
