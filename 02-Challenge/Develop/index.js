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
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project.",
  },
  {
    type: "input",
    name: "deployment",
    message: "Do you have a deployed site? If so, provide URL. If not, input N/A.",
  },
  {
    type: "input",
    name: "image",
    message: "Do you have an image of deployed site? If so, provide image. If not, input N/A.",
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