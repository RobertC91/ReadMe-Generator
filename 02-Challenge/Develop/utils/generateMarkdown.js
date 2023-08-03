// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateREADME = ({ title, description, deployment, image, install, usage, contributors, license }) =>
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
;


module.exports = generateREADME;
