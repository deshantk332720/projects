import inquirer from "inquirer";
let Convertion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0028,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.26,
        "PKR": 350.76,
        "GBP": 1
    },
    "USD": {
        "PKR": 360.76,
        "GBP": 1.32,
        "USD": 1
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "From",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency from:",
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency to:",
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your Conversion amount:",
    },
]);
const { From, to, amount } = answer;
if (From && to && amount) {
    let result = Convertion[From][to] * amount;
    console.log(`Your conversion from ${From} to ${to} is ${result}`);
}
else {
    console.log("Invalid Conversion");
}
