#!/usr/bin/env node

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
  
  
  console.log(chalk.bold("\n. Sentence Words:"));
  console.log(words);
  console.log(chalk.bold(`\n. Word Count: ${chalk.bold.red(words.length)}\n`));