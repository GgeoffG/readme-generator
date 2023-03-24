// TODO: Include packages needed for this application
const markdown=require('./utils/generateMarkdown')
const fs= require('fs')
const inquirer= require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const userPrompt = () => {

 return inquirer.prompt(
[
    {
        type: 'confirm',
        message:'would you like to use an external editor for more detailed inputs?',
        name: 'editor'
    },
    {
        type: 'input',
        message: 'What is the Title of your app?',
        name: 'title',
    },
    {
        type:'input',
        message:'Tell us about your project',
        name:'about',
        when:(data) =>  data.editor === false
    },
    {
        type:'editor',
        message:'Tell us about your project',
        name:'about',
        when:(data) =>  data.editor === true
    },
    {
        type: 'checkbox',
        message: 'What frameworks have you used in this project? (check all that apply)',
        choices: ['Next', 'React','Vue','Angular','Svelte','Laravel','Bootstrap','JQuery'],
        name: 'builtwith'
    },
    {
        type:'confirm',
        message:'Would you like to include installationg instructions?',
        name:'includeinstall',
        default: false
    },
    {
        type:'input',
        message:'Please write your installation instructions',
        name:'instruct',
        when:(data) => data.includeinstall===true && data.editor === false
    },
    {
        type:'editor',
        message:'Please write your installation instructions',
        name:'instruct',
        when:(data) => data.includeinstall===true && data.editor === true
    },
    {
        type: 'input',
        message: 'Tell us about how to use your project',
        name:'usage',
        when:(data) =>  data.editor === false
    },
    {
        type: 'editor',
        message: 'Tell us about how to use your project',
        name:'usage',
        when:(data) =>  data.editor === true
    },
    {
        type:"input",
        message:"Tell us about future development of this project",
        name:'roadmap',
        when:(data) =>  data.editor === false
    },
    {
        type:"editor",
        message:"Tell us about future development of this project",
        name:'roadmap',
        when:(data) =>  data.editor === true
    },
    {
        type:"rawlist",
        message:'Pick a liscence',
        choices:['MIT','GNU General Public v3','Boost Software License','BSD','Apache','Unlicense'],
        name: 'license'
    },
    {
        type:'input',
        message:'Enter your name',
        name: 'username',
    },
    {
        type:'input',
        message: 'Enter your twitter handle',
        name: 'twitterhandle'
    },
    {
        type:'input',
        message: 'Enter your github accout name',
        name: 'github'
    },
    {
        type:'input',
        message: 'Enter your email account',
        name: 'email'
    },
    {
        type:'input',
        message: 'What is the name of your github repository?',
        name: 'reponame'
    }
])
}



// TODO: Create a function to write README file
function writeToFile(fileName, page) {
    fs.writeFile(fileName, page, (err) => 
err? console.log(err) : console.log('success')
);
}

// TODO: Create a function to initialize app
async function init() {
const answers = await userPrompt();
writeToFile('README.md',generateMarkdown(answers))
}
// Function call to initialize app
init();
