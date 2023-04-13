const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")


const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What is needed for installation?"
    },
    {
        type: "input",
        name: "usage",
        message: "What are the details needed for the user?"
    },
    {
        type: "input",
        name: "contributions",
        message: "Who else contributed to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "What are the test instructions for this project?"
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like?",
        choices: ["IBM", "MIT", "WTFPL", "Apache", "None"]
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github user name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
];


function writeToFile(fileName, answers){
    return fs.writeFileSync(fileName, answers);
}




function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        writeToFile("./output/README.md", generateMarkdown(answers), () => {
            console.log("README successfully generated!")
        })
        console.log(answers)
    

    }
)}

init();


