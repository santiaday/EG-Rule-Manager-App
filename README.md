<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  

![egLogo](https://media.github.expedia.biz/user/24615/files/155adf93-8d7e-498b-bf10-b63e31731d4d)

<h3 align="center">Rule Manager / Generator</h3>

  <p align="center">
    The purpose of this project is to allow team members at Expedia Group to quickly and easily create rules in the correct format to be used in the rules framework in Control Plane. 
    <br />
    <br />
    <a href="https://github.expedia.biz/saaday/eg-rule-manager">View Demo</a>
    ·
    <a href="https://github.expedia.biz/saaday/eg-rule-manager/issues">Report Bug</a>
    ·
    <a href="https://github.expedia.biz/saaday/eg-rule-manager/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
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
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* ![React][React.js]
* ![Java][Java]
* ![Spring][Spring]
* ![JavaScript][JavaScript]
* ![Bootstrap][Bootstrap.com]
* ![JQuery][JQuery.com]

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

The purpose of this section is to give detailed instructions on how to install and use the application. 

### Prerequisites

##### This only applies if user does not have .jar file. Instructions on starting the .jar file will be provided below



### Installation

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### Converter
  
  ![converter](https://media.github.expedia.biz/user/24615/files/2b75bd52-3d7b-476a-8ad7-58c1666e2621)


The converter aspect of the application works to convert Excel files into .json files. When a regular excel file is uploaded, the program will read it as plaintext and convert it to a single-level json file. 

For the ability to convert to json files with nested objects and arrays, download <a href="https://github.expedia.biz/saaday/eg-rule-manager/raw/main/readMePics/master_rules.xlsx" download>this Excel template</a> and follow the instructions there. After editing the excel file, uploading it will yield one json file per rule that is created in the Excel document. 

Note that the default setting is set to create one large json file from the excel document, which can be changed by clicking on the settings button.

<br />
<br />

### Manager

![manager](https://media.github.expedia.biz/user/24615/files/e05b906a-e7cb-4327-835e-d405aa85e6e2)


The rule manager allows users to see their created rules and gives users the options to delete or download them. Please not that, as of now (07/20/2022), there is no central storage system in place and the project is not published. This means that this feature is contingent on the user choosing a local path. One alternative would be to use a github repo as a temporary storage system but, since the person creating the project is an intern, their account may be inaccessible in the future.

From the manager page, you can also download the master_rules excel file which is the same file that is linked in this read me. Apart from that, you can choose to download all the rules or choose to create a new one, discussed below. 

### Generator

![generator](https://media.github.expedia.biz/user/24615/files/7e7b12e3-68bb-48b4-94f6-e6131431dfb0)

  
 The rule generator allows users to create rules from scratch or from an existing rule. If creating from scratch, the user must choose which fields should be added. Note that depending on which field is added, the next field that can be added may vary. (ex. an object may not be pushed into a string array). 
 
 If the user chooses to import an existing rule, the user will be prompted to choose the existing rule (.json ONLY) and will be given the option of importing all of the values or only the keys. From there, users can freely modify the keys and values and add/remove fields. 
 
 **CAUTION:** Although there is no limit to the amount of nested levels and objects, after a certain number of nested levels (~15-20) the application may begin to slow down.
 
 After completing the rule, the user can choose to either update the storage or simply download the rule. 
 
 ### Example
 
 ![exampleRule](https://media.github.expedia.biz/user/24615/files/8039d6d6-2138-4906-964b-7a71d3baafc4)

  
  Note that each object has corresponding brackets with the same color to help the user identify where they are adding/removing fields. 

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Bugs

As this is an intern project, there is the possiblity that users will encounter bugs. In that case, users may submit issues <a href="https://github.expedia.biz/saaday/eg-rule-manager/issues">here</a> or contact the owner of the repo using the contact information [below](#contact).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Santiago Aday - EG Email: t-saaday@expediagroup.com - Personal Email: santiagoaday7@gmail.com

LinkedIn: https://www.linkedin.com/in/santiagoaday/

Project Link: [https://github.expedia.biz/saaday/eg-rule-manager](https://github.expedia.biz/saaday/eg-rule-manager)

<p align="right">(<a href="#top">back to top</a>)</p>


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Java]: https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white
[JavaScript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[Spring]: https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white
