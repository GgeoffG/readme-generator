// TODO: Include packages needed for this application
const markdown=require('./utils/generateMarkdown')
const inquirer= require('inquirer')
// TODO: Create an array of questions for user input
inquirer
.prompt()
const questions = [
    {
        type: 'input',
        message: 'What is the Title of your app?',
        name: 'title',
    }
    {
        type: 'input'
        message: ''
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
