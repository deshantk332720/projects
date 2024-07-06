import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 2008;
// --------------------------------     
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: " ENTER YOUR PIN",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("!!! CORRECT PIN !!!");
}
else {
    console.log("!!! INCORRECT PIN !!!");
}
// ----------------------------------
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "CHOOSE YOUR OPERATION ",
        choices: ["Withdraw",
            "Check balance",
            "Exit"
        ]
    }
]);
// ----------------------------------
if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "ENTER THE AMOUNT FOR WITHDRAWAL",
            type: "number"
        }
    ]);
    if (amountAns.amount <= myBalance) {
        let balance = myBalance - amountAns.amount;
        console.log(`YOUR REMAINNG BALANCE IS :${balance}`);
    }
    else {
        console.log(`BE IN YOUR LIMITS`);
    }
}
// ---------------------------------------------    
if (operationAns.operation === "Check balance") {
    console.log("YOUR BALANCE IS", myBalance);
}
// ---------------------------------------------
if (operationAns.operation === "Exit") {
    console.log("THANK YOU FOR USING");
}
