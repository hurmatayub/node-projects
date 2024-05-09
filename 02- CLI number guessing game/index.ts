#! /usr/bin/env node

import inquirer from "inquirer";


 const randomNumber = Math.floor(Math.random() * 10 + 1);
 console.log("Welcome to number guessingg game.");
 
 
const answers = await inquirer.prompt([
 {
    name: "userGuessNumber",
    type: "number",
    message: "Please guess a number between 1-10:",
},
]);

console.log(answers);

if(answers.userGuessNumber === randomNumber) {
    console.log("Congratulationssss! you guessed correct number.");
}else {
    console.log("You guessed wrong number");
}
