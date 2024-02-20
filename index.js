const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
    { type: 'input', name: 'title', message: 'What is the title of your project?' },
    { type: 'input', name: 'description', message: 'Provide a brief overview of your project:' },
    { type: 'input', name: 'installation', message: 'How is your project installed?' },
    { type: 'input', name: 'usage', message: 'What is the purpose of your project?' },
    {
        type: 'list',
        name: 'license',
        message: 'Select the license for your project:',
        choices: ['Apache License 2.0',
        'GNU General Public License v3.0',
        'MIT License',
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        'Boost Software License 1.0',
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU Lesser General Public License v2.1',
        'Mozilla Public License 2.0',
        'The Unlicense',
        'None']
    },
    { type: 'input', name: 'contributing', message: 'How may others contribute to your project?' },
    { type: 'input', name: 'tests', message: 'How can your project be tested?' },
    { type: 'input', name: 'github', message: 'Fill in your GitHub username:' },
    { type: 'input', name: 'email', message: 'Enter your email address:' }
];

// function to write README file *Starter pack
// function writeToFile(fileName, data) {
// }

//NEW

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('The README.md file has been successfully created!');
      }
    });
  }

// function to initialize program
function init() {

}

// function call to initialize program
init();
