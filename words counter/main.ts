
import inquirer from "inquirer";

const answers:{
    sentence: string 
} = await inquirer.prompt([
    {
    name:"sentence",
    type:"input",
    message:"ENTER YOUR SENTENCE TO COUNT THE WORDS:"
    }
])

const words = answers.sentence.trim().split(" ")

console.log(words)

console.log(`YOUR SENTENCE WORD COUNT IS ${words.length}`);
