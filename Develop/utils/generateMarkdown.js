// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  } else if (license === "Apache 2.0") {
    return "![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
  } else if (license === "GPL 3.0") {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
  } else if (license === "BSD 3") {
    return "![License: BSD 3](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"
  } else if (license === "LGPL 3.0") {
    return "![License: LGPL 3.0](https://img.shields.io/badge/License-LGPL%203.0-blue.svg)"
  } else if (license === "Mozilla 2.0") {
    return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)"
  } else if (license === "CDDL 1.0") {
    return "![License: CDDL 1.0](https://img.shields.io/badge/License-CDDL%201.0-blue.svg)"
  } else {
    return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT"
  } else if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0"
  } else if (license === "GPL 3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0"
  } else if (license === "BSD 3") {
    return "https://opensource.org/licenses/BSD-3-Clause"
  } else if (license === "LGPL 3.0") {
    return "https://www.gnu.org/licenses/lgpl-3.0"
  } else if (license === "Mozilla 2.0") {
    return "https://opensource.org/licenses/MPL-2.0"
  } else if (license === "CDDL 1.0") {
    return "https://opensource.org/licenses/CDDL-1.0"
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return "This project is licensed under the MIT license."
  } else if (license === "Apache 2.0") {
    return "This project is licensed under the Apache 2.0 license."
  } else if (license === "GPL 3.0") {
    return "This project is licensed under the GPL 3.0 license."
  } else if (license === "BSD 3") {
    return "This project is licensed under the BSD 3 license."
  } else if (license === "LGPL 3.0") {
    return "This project is licensed under the LGPL 3.0 license."
  } else if (license === "Mozilla 2.0") {
    return "This project is licensed under the Mozilla 2.0 license."
  } else if (license === "CDDL 1.0") {
    return "This project is licensed under the CDDL 1.0 license."
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
  ${data.description}

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

## Installation
  ${data.installation}

## Usage
  ${data.usage}

## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

## Contribution
  ${data.contribution}

## Tests
  ${data.tests}

## Questions
  If you have any questions, please contact me at ${data.email} or visit my [GitHub page](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;
