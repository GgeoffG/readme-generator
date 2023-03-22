// TODO: Include packages needed for this application
const markdown=require('./utils/generateMarkdown')
const fs= require('fs')
const inquirer= require('inquirer')
// TODO: Create an array of questions for user input
// const generateMarkdown= ({title,about,builtwith,includeinstall,usage,roadmap,license, username,twitterhandle,github,email}) =>
inquirer
.prompt(
[
    {
        type: 'input',
        message: 'What is the Title of your app?',
        name: 'title',
    },
    {
        type:'editor',
        message:'Tell us about your project',
        name:'about'
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
        type:'editor',
        message:'Please write your installation instructions',
        name:'instruct',
        when:(data) => data.includeinstall===true
    },
    {
        type: 'editor',
        message: 'Tell us about how to use your project',
        name:'usage'
    },
    {
        type:"editor",
        message:"Tell us about future development of this project",
        name:'roadmap'
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
])
.then( writeJson=(data)=> {
fs.writeFile('README.json', JSON.stringify(data, null, `\t`), (err) => {
    err? console.log(err) : console.log("file saved")
})
})


// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
    let info=fs.readFile('README.json');
    console.log(info)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
