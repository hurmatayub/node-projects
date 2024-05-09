#! /usr/bin/env node

import inquirer from "inquirer"

let mybalance = 10000;
let pinCode = 1234;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin",
            type: "number"
        }
    ]
) ;

if(pinAnswer.pin === pinCode) {
    console.log("Correct pin code!!!");

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw", "check balance", "fast cash"]
            }
        ]
    );
    console.log(operationAns); 

 if(operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number"
                }
            ]
        );
      if(amountAns.amount < mybalance) {
        mybalance -=amountAns.amount;
        console.log(`your current balance is ${mybalance}`);
      }
      else {
        console.log("Insufficient balance");
        
      }}
    
    
else if (operationAns.operation === "check balance") {
        console.log(`your balance is ${mybalance}`);
    }  
else if (operationAns.operation === "fast cash") {
        let fastCash = await inquirer.prompt(
            [
                {
                    name: "fastMehthod",
                    message: "select your amount",
                    type: "list",
                    choices: [1000, 2000, 5000, 10000]
                }
            ]
        );

        mybalance -=fastCash.fastMehthod;

        console.log(`your remianing balance is ${mybalance}`);
    } 
}


else {
    console.log("Incorrect pin code");
    
}