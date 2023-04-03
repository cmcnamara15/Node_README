// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
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
        type: "input",
        name: "license",
        message: ["", "", "", ""]
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

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions)
//     .then((answers) => {
//         console.log(answers)

//         const template = `
// # ${answers.title}

// ## Description
// ${answers.description}

// ## Installation
// ${answers.installation}

// ## Usage Information
// ${answers.usage}

// ## Contribution Guidelines 
// ${answers.contribution}

// ## Test Instructions
// ${answers.tests}

// ## License
// ${answers.license}

// ## Questions 
// // Enter github user name and append it as link to README
// // Enter email with template attached text on how to reach me with additional questions. 

// If you have any questions please feel free to reach out to @${answers.github} on github or email ${answers.email}.

// ## Table of Contents

//         `

//         console.log(template)

//         fs.writeFile("./output/README.md", template, () => {
//             console.log("README successfully generated!")
//         })
//     })
// }

// // Function call to initialize app
// init();


// TABLE OF CONTENTS 
// when i click on link in the Table of Contents THEN I am taken to the corresponding section of the README