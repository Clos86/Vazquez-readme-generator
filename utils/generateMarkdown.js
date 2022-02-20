// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (!license) {
    return '';
  }
  return `![Github licence](http://img.shields.io/badge/license-${license}-blue.svg)`;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (!license) {
    return '';
  }
  return `
  ## License 
  This project is license under [${license}](https://choosealicense.com/licenses/${license}/)`;
};

// TODO: Create a function to generate markdown for README
module.exports = generateMarkdown => {
const { title, description, license, ...data} = generateMarkdown;
  return `# ${title}
  ${renderLicenseBadge(license)}  
  ## Description 
  ${description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.install}
  ## Usage 
  ${data.usage}
  ${renderLicenseSection(license)}
  ## Tests
  ${data.test}
  ## Questions
  If you have any questions about this projects, please contact me directly at [${data.email}](mailto:${data.email}). You can view more of my projects at [${data.github}](https://github.com/${data.github}).
`;
}

;
