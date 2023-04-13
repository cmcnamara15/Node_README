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



// function renderLicenseLink(license) {}


// function renderLicenseSection(license) {}


function generateMarkdown(answers) {
  return `
# ${answers.title}


#${renderLicenseBadge(answers.license)}

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage Information](#usage-information)
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
${answers.contributions}

## Test Instructions
${answers.tests}

## License
${answers.license}

## Questions 
If you have any questions please feel free to reach out to [${answers.github}](https://github.com/${answers.github}) on github or email ${answers.email}.

`;

}

module.exports = generateMarkdown;
