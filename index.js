const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);
const mark = require("./utils/generateMarkdown")

// array of questions for user
const questions = [  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},
{
 type: "input",
 name: "desc",
 message: "Describe your project."
},
{
 type: "input",
 name: "inst",
 message: "How do you install this project?"
},
{
 type: "input",
 name: "usag",
 message: "What is this project used for?"
},
{
 type: "input",
 name: "cont",
 message: "Who contributed to this project?"
},
{
 type: "input",
 name: "test",
 message: "What tests?"
},
{
 type: "list",
 name: "lice",
 message: "What is your license?",
 choices: [
    "MIT",
    "Apache",
    "Mozilla"
 ]
},
{
    type: "input",
    name: "gith",
    message: "What is your GitHub username?"
},
{
    type: "input",
    name: "email",
    message: "What's your email address?"
}
];

// Ask Questions Function
function ask(){
    return inquirer.prompt(questions)
}

// function to write README file
async function writeToFile(data) {
 await writeFileAsync("READMER.md", data);   
}

// function to initialize program
async function init() {
try{
    const answer = await ask();
    const data = mark.generateMarkdown(answer); 
   writeToFile(data)
}catch (err) {
    console.log(err);    
}}

// function call to initialize program
init();
