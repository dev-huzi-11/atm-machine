#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 2007;
let pinAns = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin",
    type: "number"
});
if (pinAns.pin === myPin) {
    console.log("Correct pin code!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please selesct option",
            type: "list",
            choices: ["Withdraw", "Fast Cash", "Check Balance"]
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
        if (amountAns.amount > 10000) {
            console.log("you dont have enough money");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`Your current balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Fast Cash") {
        let FcashAns = await inquirer.prompt([
            {
                name: "fastamount",
                message: "Select your amount",
                type: "list",
                choices: [1000, 3000, 5000, 7000, 10000]
            }
        ]);
        if (FcashAns.fastamount === 1000) {
            myBalance -= 1000;
            console.log(`Your current balance is: ${myBalance}`);
        }
        if (FcashAns.fastamount === 3000) {
            myBalance -= 3000;
            console.log(`Your current balance is: ${myBalance}`);
        }
        if (FcashAns.fastamount === 5000) {
            myBalance -= 5000;
            console.log(`Your current balance is: ${myBalance}`);
        }
        if (FcashAns.fastamount === 7000) {
            myBalance -= 7000;
            console.log(`Your current balance is: ${myBalance}`);
        }
        if (FcashAns.fastamount === 10000) {
            myBalance -= 10000;
            console.log(`Your current balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your current balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pincode");
}
