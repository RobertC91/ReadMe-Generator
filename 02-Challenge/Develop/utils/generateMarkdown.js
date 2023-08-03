// TODO: Create a function to generate markdown for README
const generateREADME = ({ title, description, install, usage, contributors, tests, email, github, license }) =>
  `# ${title}

    ## License

    ${license}

    ## Description
    
    ${description}

    ## Table of Contents
 
      - Installation
      - Usage
      - Contributors
      - Tests
      - Questions
    
    ## Installation
    
    ${install}
    
    ## Usage
    
    ${usage}
    
    
    ## Contributors
    
    ${contributors}

    ## Tests

    ${tests}

    ## Questions

    If you have any questions feel free to contact me via ${email}, you can also view more of my projects at https://github.com/${github}.
    
    `;


module.exports = generateREADME;
