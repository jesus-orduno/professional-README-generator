// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    name: 'title',
    type: 'input',
    message: 'What is the title of your project?'
  },
  {
    name: 'description',
    type: 'input',
    message: 'Please provide a description of your project.'
  },
  {
    name: 'installation',
    type: 'input',
    message: 'Please provide installation instructions for your project.'
  },
  {
    name: 'usage',
    type: 'input',
    message: 'Please provide usage information for your project.'
  },
  {
    name: 'license',
    type: 'list',
    message: 'Please select a license for your project.',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'LGPL 3.0', 'Mozilla 2.0', 'CDDL 1.0', 'None']
  },
  {
    name: 'contribution',
    type: 'input',
    message: 'Please provide contribution guidelines for your project.'
  },
  {
    name: 'tests',
    type: 'input',
    message: 'Please provide test instructions for your project.'
  },
  {
    name: 'github',
    type: 'input',
    message: 'Please provide your GitHub username.'
  },
  {
    name: 'email',
    type: 'input',
    message: 'Please provide your email address.'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
