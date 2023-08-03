// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// const fs = require("fs");
const { writeFile } = require('fs').promises
const generateREADME = require(`./utils/generateMarkdown.js`);

// TODO: Create an array of questions for user input
const questions = () => {
return inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter a Title')
        }
    }
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project.",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please provide a Description')
        }
    }
  },
  {
    type: "input",
    name: "install",
    message: "Provide installation requirements for your project.",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please provide Installation Requirements or type N/A.')
        }
    }
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage details for your project",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please describe how to use your project or type N/A')
        }
    }
  },
  {
    type: "input",
    name: "contributors",
    message: "Provide contributors.",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please provide contributors or type N/A')
        }
    }
  },
  {
    type: "input",
    name: "tests",
    message: "What programs are required to test your project?",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please identify programs required or type N/A')
        }
    }
  },
  {
    type: "input",
    name: "email",
    message: "Please provide an email you can be reached at.",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please provide an Email')
        }
    }
  },
  {
    type: "input",
    name: "github",
    message: "Please provide your GitHub name.",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please provide your GitHub name')
        }
    }
  },
  {
    type: "list",
    name: "license",
    message: "Which license does your project use?",
    choices: [
      "MIT License",
      "GNU General Public License v3.0",
      "Apache License 2.0",
      "Mozilla Public License 2.0",
      "Unlicensed",
    ],    
    default: [
        "MIT License"
    ],
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please choose a License')
        }
    }
  },
]);
}

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((answers) => writeFile('README.md', generateREADME(answers)))
    .then(() => console.log('You have successfully created a README'))
    .catch((err) => console.log(err))
};

// Function call to initialize app
init();