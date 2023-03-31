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
        type: 'confirm',
        message: 'Would you like to include an image',
        name: 'includeimage'
    },
    {
        type: 'input',
        message:'Please input file name with extension ie. example.png',
        name: 'imagefile',
        when: (data) => data.includeimage === true

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
        type: 'confirm',
        message: "Are there any Prerequisites to running this program?",
        name: 'includePreReq'
    },
    {
        type: 'editor',
        message: "What are the prerequisites to running this program?",
        name: 'preReq',
        when: (data) => data.includePreReq === true 
    },
    {
        type:'confirm',
        message:'Would you like to include installation instructions?',
        name:'includeinstall',
        default: false
    },
    {
        type:'editor',
        message:'Please write your installation instructions',
        name:'instruct',
        when:(data) => data.includeinstall===true
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
        type: "confirm",
        message: "Would you like to include guidelines for contributing?",
        name: "includeCon",
    },
    {
        type: 'confirm',
        message: 'Would you like to use our basic contributing guidelines? (No will open an editor prompt)',
        name: "basic",
        when: (data) => data.includeCon === true
    },
    {
        type: 'editor',
        message: 'Please enter your contributing guidelines',
        name: 'customguideline',
        when: (data) => data.basic===false
    },
    {
        type:"confirm",
        message:'Would you like to include license information?',
        name: 'includelicense'
    },
    {
        type:"rawlist",
        message:'Pick a liscence',
        choices:['MIT','BSD 3-Clause','BSD 2-Clause','Boost Software License ','Apache','Unlicense'],
        name: 'license',
        when:(data) => data.includelicense === true,
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
    },
    {
        type:'confirm',
        message: 'Would you like to include any acknowlegements?',
        name: 'includeAck'
    },
    {
        type:'input',
        message:'Who would you like to acknowlege?', 
        name: 'acknowledge',
        when:(data) => data.includeAck === true && data.editor === false
    },
    {
        type:'editor',
        message:'Who would you like to acknowlege?', 
        name: 'acknowledge',
        when:(data) => data.includeAck === true && data.editor === true
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
