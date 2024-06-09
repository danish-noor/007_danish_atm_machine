#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 12000; //Dollar
let myPin = 1234;
console.log(`Welcome To Danish Noor ATM Machine`);
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code! login successfully");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast cash"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("you have Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw successfully`);
            console.log(`your remaining account balance is:${myBalance}`);
        }
        ``;
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`your remaining account balance is ${myBalance}`);
    }
    if (operationAns.operation === "Fast cash") {
        let selectAmount = await inquirer.prompt([
            {
                name: "amount1",
                message: "Select Cash",
                type: "list",
                choices: ["1000", "2000", "3000", "5000", "10000"]
            }
        ]);
        if (selectAmount.amount1 === "1000") {
            myBalance -= selectAmount.amount1;
            console.log(`Now your Balance is: ${myBalance}`);
        }
        if (selectAmount.amount1 === "2000") {
            myBalance -= selectAmount.amount1;
            console.log(`Now your Balance is: ${myBalance}`);
        }
        if (selectAmount.amount1 === "3000") {
            myBalance -= selectAmount.amount1;
            console.log(`Now your Balance is: ${myBalance}`);
        }
        if (selectAmount.amount1 === "5000") {
            myBalance -= selectAmount.amount1;
            console.log(`Now your Balance is: ${myBalance}`);
        }
        if (selectAmount.amount1 === "10000") {
            myBalance -= selectAmount.amount1;
            console.log(`Now your Balance is: ${myBalance}`);
        }
    }
}
else {
    console.log("Incorect pin number, Try Again");
}
;
