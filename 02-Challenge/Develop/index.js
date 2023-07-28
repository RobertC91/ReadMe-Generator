// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project.",
  },
  {
    type: "confirm",
    name: "deployment",
    message: "Do you have a deployed site?",
  },
  {
    type: "confirm",
    name: "image",
    message: "Do you have an image of deployed site?",
  },
  {
    type: "input",
    name: "install",
    message: "Provide installation requirements for your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage details for your project",
  },
  {
    type: "input",
    name: "contributors",
    message: "Provide contributors.",
  },
  {
    type: "list",
    name: "license",
    message: "Which license does your project use?",
    choices: [
      "MIT License",
      "GNU General Public License v3.0",
      "Apache License 2.0",
      'BSD 3-Clause "New" or "Revised" License',
      'BSD 2-Clause "Simplified" License',
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],    
    default: [
        "MIT License"
    ],
  },
]);
const { title, description, deployment, image, install, usage, contributors, license } = inquirer
// TODO: Create a function to write README file
.then((response) => {
    const README = 
    `# ${title}

    ## Description
    
    ${description}
    
    
    ## Here is a link to the deployed site on GitHub:
    
    ${deployment}
    
    ## As well as an image showcasing the Start Screen of the page:
    
    ${image}
    
    ## Installation
    
    ${install}
    
    ## Usage
    
    ${usage}
    
    
    ## Contributors
    
    ${contributors}
    
    ## License
    
    ${license}`
})

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
