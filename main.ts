#! /usr/bin/env node

import chalk from "chalk"

console.log(chalk.blueBright("\n \t^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\t \n"));
console.log(chalk.yellow.bold( " \t \t Welcome To My Word Counter \t"));
console.log(chalk.blueBright("\n \t^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\t \n"));


import inquirer from "inquirer";

// Declare constant 'answer' and assign it to the result of inquirer.prompt Function.

let answers = await inquirer.prompt
(
    [
        {
          name : "sentence",
          type : "input",
          message : "Enter Your sentence to count the word : ",
        }
    ]
)

const words = answers.sentence.trim().split(" ");

//print the array of words to the console.

console.log(words);

// Print the word count of the sentence to the
console.log(`Your Sentence word count is ${words.length}`);