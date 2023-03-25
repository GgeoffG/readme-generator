// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let badge = "";
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "BSD 3-Clause":
      badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case "BSD 2-Clause":
      badge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case "Boost Software License":
      badge =
        "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "Apache":
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "Unlicense":
      badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data.license);
  return `#${data.title}
  <!-- TABLE OF CONTENTS -->
  <details>
    <summary>Table of Contents</summary>
    <ol>
      <li>
        <a href="#about-the-project">About The Project</a>
        <p>${data.about} 
        </p>
        <ul>
          <li><a href="#built-with">Built With</a></li>
        </ul>
      </li>
      <li>
        <a href="#getting-started">Getting Started</a>
        <ul>
          <li><a href="#prerequisites">Prerequisites</a></li>
          <li><a href="#installation">Installation</a></li>
        </ul>
      </li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#roadmap">Roadmap</a></li>
      <li><a href="#contributing">Contributing</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#acknowledgments">Acknowledgments</a></li>
    </ol>
  </details>
  
  
  
  <!-- ABOUT THE PROJECT -->
  ## About The Project
  ${data.includeimage ? 
  `[![Product Name Screen Shot][product-screenshot]](./images/${data.imagefile})<br>` : ''}
  ${data.about}
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  
  
  ### Built With
  ${data.builtwith}
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  
  
  <!-- GETTING STARTED -->
  <!-- ## Getting Started
  
  
  ### Prerequisites -->
  
 ${data.includeinstall ? `### Installation <br>  ${data.instruct}` : ""} 
 
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  
  
  <!-- USAGE EXAMPLES -->
  ## Usage
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  
  
  <!-- ROADMAP -->
  ## Roadmap
  ${data.roadmap} <br> 
  See the [open issues](https://github.com/${data.github}/${data.reponame}/issues) for a full list of proposed features (and known issues).
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  
  
  <!-- CONTRIBUTING -->
  ## Contributing
  
  1. Fork the Project
  2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
  3. Commit your Changes (git commit -m 'Add some AmazingFeature)
  4. Push to the Branch (git push origin feature/AmazingFeature)
  5. Open a Pull Request
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
  
  
  
  <!-- LICENSE -->
  ${
    data.includelicense
      ? ` ## License
  ${badge} 
  www.github.com/${data.github}/${data.reponame}/blob/main/LICENSE
  <p align="right">(<a href="#readme-top">back to top</a>)</p>
`
      : ""
  }
  
  
  <!-- CONTACT -->
  ## Contact
  
  ${data.username} - [@${data.twitterhandle}] (https://twitter.com/${
    data.twitterhandle
  }}) - ${data.email}
  
  Project Link: [https://github.com/${data.github}/${
    data.reponame
  }](https://github.com/${data.github}/${data.reponame})
  
  <p align="right">(<a href="#readme-top">back to top</a>)</p>`;
}

module.exports = generateMarkdown;
