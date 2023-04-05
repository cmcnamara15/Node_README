// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'IBM'){
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }else if(license === 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    `
  }else if(license === 'WTFPL'){
    return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)
    `
  }else if(license === 'Apache'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    `
  }else{
    return " "
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}


#${renderLicenseBadge(answers.license)}

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage Information](#information)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [License](#license)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage Information
${answers.usage}

## Contribution Guidelines 
${answers.contribution}

## Test Instructions
${answers.tests}

## License
${answers.license}

## Questions 
If you have any questions please feel free to reach out to @${answers.github} on github or email ${answers.email}.

`;

}

module.exports = generateMarkdown;
