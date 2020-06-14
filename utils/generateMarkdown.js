//var index = require("../index")
// function to generate markdown for README
function generateMarkdown(answer) {
  return `# ${answer.title}
## Description
***
${answer.desc}
## Table of Contents
***
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
***
${answer.inst}  
## Usage
***
${answer.usag}
## License
***
${answer.lice}
## Contributing
***
${answer.cont}
## Tests
***
${answer.test}
## Questions
***
Contact me if you have any questions! \n
GitHub: <a href="https://github.com/${answer.gith}/">${answer.gith}</a> \n
Email: ${answer.email}
`;
}

module.exports = { 
  generateMarkdown
}