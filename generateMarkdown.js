// function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = '';
  let licenseNotice = '';

  //Licence bagde generation

  switch (data.license) {

    case 'Apache License 2.0':
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      licenseNotice = 'This project is licensed under the Apache License 2.0.';
      break;

    case 'GNU General Public License v3.0':
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      licenseNotice = 'This project is licensed under the GNU General Public License v3.0.';
      break;

    case 'MIT License':
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      licenseNotice = 'This project is licensed under the MIT license.';
      break;

    case 'BSD 2-Clause "Simplified" License':
      licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
      licenseNotice = 'This project is licensed under the BSD 2-Clause "Simplified" License.';
      break;

    case 'BSD 3-Clause "New" or "Revised" License':
      licenseBadge = `[![License: BSD-3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      licenseNotice = 'This project is licensed under the BSD 3-Clause "New" or "Revised" License.';
      break;

    case 'Boost Software License 1.0':
      licenseBadge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
      licenseNotice = 'This project is licensed under the Boost Software License 1.0.';
      break;
    
    case 'Creative Commons Zero v1.0 Universal':
      licenseBadge = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
      licenseNotice = 'This work is licensed under Creative Commons Zero v1.0 Universal.';
      break;

    case 'Eclipse Public License 2.0':
      licenseBadge = `[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)`;
      licenseNotice = 'This project is licensed under the Eclipse Public License 2.0.';
      break;

    case 'GNU Affero General Public License v3.0':
      licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      licenseNotice = 'This project is licensed under the GNU Affero General Public License v3.0.';
      break;

    case 'GNU General Public License v2.0':
      licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      licenseNotice = 'This project is licensed under the GNU General Public License v2.0.';
      break;

    case 'GNU Lesser General Public License v2.1':
      licenseBadge = `[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)`;
      licenseNotice = 'This project is licensed under the GNU Lesser General Public License v2.1.';
      break;
    
    case 'Mozilla Public License 2.0':
      licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      licenseNotice = 'This project is licensed under the Mozilla Public License 2.0.';
      break;
      
    case 'The Unlicense':
      licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
      licenseNotice = 'This project is licensed under The Unlicense.';
      break;

    case 'None':
      licenseBadge = '';
      licenseNotice = 'This project is not licensed.';
      break;

    default:
      licenseBadge = '';
      licenseNotice = 'License not specified.';
  }

  //GitHub link generation

  const githubLink = `[${data.github}](https://github.com/${data.github})`;
  
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
