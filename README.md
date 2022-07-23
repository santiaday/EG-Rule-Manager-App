<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  
![egLogo](https://user-images.githubusercontent.com/74830912/180623661-ac34b7a5-73d8-4c26-9019-64ec16da8efc.jpg)



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

The purpose of this section is to give detailed instructions on how to install and use the application. cd tar  

## Prerequisites

##### In order to run this application on your machine, you must have Java installed. 

### How To Check If Java Is Installed

#### Windows: 

1. Open a command prompt (Ctrl+R and type "cmd" and press enter OR search "cmd" in Windows search)

2. Type in this command:

        java -version

3. Expected output:

![javaVersion](https://user-images.githubusercontent.com/74830912/180585198-c5ca58aa-12ca-441c-bf0c-a98cbb2eff00.JPG)

If no version is detected, you will have to install Java before running the application. 

#### MacOS: 

1. Open a terminal (Ctrl+Spacebar and type "terminal" and press enter)

2. Type in this command:

        java -version

3. Expected output:

<img width="526" alt="Screen Shot 2022-07-22 at 6 02 03 PM" src="https://user-images.githubusercontent.com/74830912/180584729-c07a0db4-18e6-4e07-8ca8-4fde0f26136e.png">

If no version is detected, you will have to install Java before running the application. 


If Java is installed on your machine, you can move on to the rest of the installation. 



## Installation

<p align="right">(<a href="#top">back to top</a>)</p>

### Getting .jar File

1. Visit this link:

https://drive.google.com/drive/folders/1zt9epSeoQhqLiSXme2MBooYUUXSMxkVC?usp=sharing

2 Download the .jar file. (If prompted for viruses, click to download anyway. This is an enterprise Github so only Expedia employees have access to this link. After termination of internship, location may change, depending on the future owner of the repo).

**DO NOT**double-click as this would start the program but will not grant the sufficient permissions that are needed for the program to work properly. Instead, click "Show In Folder" on Windows or "Show In Finder" for MacOS.


#### NOTE: Running the application is going to create two new directories in the current working directory: "rulesStorage" and "uploadedFiles". These are necessary for the application to work properly. It is vital that they remain in the same directory as the .jar file in order for the application to work correctly. If the application is started incorrectly and these directories are not created, it is advised that they be correctly created with these names in the correct directory.

### Windows Only

1. Once the file is downloaded and in the directory, you may double-click it to start it. If you are developing the application and would like to see stack traces or debugging information, do the following instead:

        1. Open a command prompt (Ctrl+R and type "cmd" and press enter OR search "cmd" in Windows search)
        2. Use the "cd" command to find the directory where the application .jar file is located. 
        3. Run the following command: 
              
            java -jar eg-manager-app.jar
              
        4. The application will be started and the command prompt will display any errors that are present. 

2. If the application was started correcty, two new directories ("rulesStorage" and "uploadedFiles") should have been created. The rulesStorage directory will contain all the created rules and the uploadedFiles will contain all the files that have been converted (this directory is emptied out every ~5 minutes to conserve space).

3. Once the application has been started, open a browser of your choice (preferably Chrome, but any will work) and type the following in the address bar: 

        localhost:8080
        
4. To terminate the program, open a new command prompt (Ctrl+R and type "cmd" and press enter OR search "cmd" in Windows search) and type the following command: 
         
         taskkill /f /im javaw.exe
  
Alternatively, you can open a task manager (Ctrl+Alt+Del and "Task Manager") and search for a process that says:

        Java(TM) Platform SE binary
        
Click on this process and click "End Task"

### MacOS Only

#### NOTE: Due to MacOs permissions, the process is slighltly more complicated than Windows, but if done correctly, will work fine. 

1. Once the file is downloaded and in the directory, DO NOT double click it. Instead, open a terminal (Ctrl+Spacebar and type "terminal" and press enter) and use the cd command to go to the directory where the .jar file is stored. For example:

        If the .jar file is stored in the "test" folder that is located in the "Documents" directory, you would do the following:
        
                cd Documents/test
        
        After pressing enter, you will be in the directory: Documents/test. To make sure it is the correct directory, type "ls" and make sure that one of the files shown is the .jar file

2. If you are in the correct directory, you can run this command to start the application:

        java -jar eg-manager-app.jar
        
3. If you are prompted with an error sign that says that the application cannot be opened because it is from an untrusted developer, do the following: 

        Open System Preferences
        Navigate to "Security & Privacy"
        There should be a message at the bottom that says that the application was blocked. Click on "Open Anyway".

3. Once the application has been started, open a browser of your choice (preferably Chrome, but any will work) and type the following in the address bar: 

        localhost:8080
        
4. If the application was started correcty, two new directories ("rulesStorage" and "uploadedFiles") should have been created. The rulesStorage directory will contain all the created rules and the uploadedFiles will contain all the files that have been converted (this directory is emptied out every ~5 minutes to conserve space).
        
5. To terminate the program, open a new activity monitor and, in the upper right corner, type in "java". Then, you may delete the shown items. Deleting these items will terminate the application and clear the port for future use.  
         
## Alternate Installation Instructions

If the location of the .jar file is corrupt or you don't have access to it, follow these instructions to create your own .jar file.

### Prerequisites

In order to create your own .jar file and follow along with these installation instructions, you must have Maven installed on your machine. Follow these steps to check if you have Maven installed. You must also have Git installed on your machine. 

#### Windows: 

1. Open a command prompt (Ctrl+R and type "cmd" and press enter OR search "cmd" in Windows search)

2. Type in this command:

        mvn -version

3. Expected output:

![mavenVersion](https://user-images.githubusercontent.com/74830912/180586303-a69aaa4a-d637-4c12-94d1-19e591a19dd7.JPG)

If no version is detected, you will have to install Maven before running the application. 

4. Then, type in this command:

        git --version

5. Expected output: 



#### MacOS: 

1. Open a terminal (Ctrl+Spacebar and type "terminal" and press enter)

2. Type in this command:

        mvn -version

3. Expected output:

<img width="859" alt="Screen Shot 2022-07-23 at 1 34 47 PM" src="https://user-images.githubusercontent.com/74830912/180622415-5ad8b2c7-112a-40bb-af8b-841299ff6af4.png">


If no version is detected, you will have to install Java before running the application. 

4. Then, type in this command:

        git --version

5. Expected output: 

<img width="243" alt="Screen Shot 2022-07-23 at 1 52 07 PM" src="https://user-images.githubusercontent.com/74830912/180622591-22da7ea8-3a84-4c38-a5b7-ec9ac77577c7.png">

If Maven is installed on your machine, you can move on to the rest of the installation. 

## Github Cloning Method

This alternate method involves cloning the github repo and creating your own .jar file.

#### Windows Only

1. Open a command prompt (Ctrl+R and type "cmd" and press enter OR search "cmd" in Windows search)

2. Type in the following command (copy repo url or use the one here): 

        git clone https://github.expedia.biz/saaday/eg-rule-manager-app
        
3. Use the cd command to enter the clone directory. 

4. Type in the following command to package the repo into a single .jar file:

        mvn clean install
        
5. This will install all the necessary modules and package the repo into a .jar file, it may take a few minutes so give it some time. Then, type in these two commands:

         cd target
         
         java -jar eg-rule-manager-app.jar
         
6. The console should display that the program has started and you may then visit the following in a browser:

          localhost:8080
          
If the installation was done correctly, the application should be working and two new directories should have been created in the working directory. 

#### MacOS Only

1. Open a terminal (Ctrl+Spacebar and type "terminal" and press enter)

2. Type in the following command (copy repo url or use the one here): 

        git clone https://github.expedia.biz/saaday/eg-rule-manager-app
        
3. Use the cd command to enter the clone directory. 

4. Type in the following command to package the repo into a single .jar file:

        mvn clean install
        
5. This will install all the necessary modules and package the repo into a .jar file, it may take a few minutes so give it some time. Then, type in these two commands:

         cd target
         
         java -jar eg-rule-manager-app.jar
         
6. The console should display that the program has started and you may then visit the following in a browser:

          localhost:8080
          
If the installation was done correctly, the application should be working and two new directories should have been created in the working directory. 



<!-- USAGE EXAMPLES -->
## Usage

### Converter
  
![converter](https://user-images.githubusercontent.com/74830912/180623709-0df1747b-763f-402d-a1ec-429ab7176cd5.PNG)


The converter aspect of the application works to convert Excel files into .json files. When a regular excel file is uploaded, the program will read it as plaintext and convert it to a single-level json file. 

For the ability to convert to json files with nested objects and arrays, download <a href="https://github.expedia.biz/saaday/eg-rule-manager/raw/main/readMePics/master_rules.xlsx" download>this Excel template</a> and follow the instructions there. After editing the excel file, uploading it will yield one json file per rule that is created in the Excel document. 

Note that the default setting is set to create one large json file from the excel document, which can be changed by clicking on the settings button.

<br />
<br />

### Manager

![manager](https://user-images.githubusercontent.com/74830912/180623708-d3f42844-5794-437f-b06b-33507972e4fb.PNG)


The rule manager allows users to see their created rules and gives users the options to delete or download them. Please not that, as of now (07/20/2022), there is no central storage system in place and the project is not published. This means that this feature is contingent on the user choosing a local path. One alternative would be to use a github repo as a temporary storage system but, since the person creating the project is an intern, their account may be inaccessible in the future.

From the manager page, you can also download the master_rules excel file which is the same file that is linked in this read me. Apart from that, you can choose to download all the rules or choose to create a new one, discussed below. 

### Generator

![generator](https://user-images.githubusercontent.com/74830912/180623705-3f0b8273-58f3-4e50-8234-26ac2ddfa0c6.PNG)

  
 The rule generator allows users to create rules from scratch or from an existing rule. If creating from scratch, the user must choose which fields should be added. Note that depending on which field is added, the next field that can be added may vary. (ex. an object may not be pushed into a string array). 
 
 If the user chooses to import an existing rule, the user will be prompted to choose the existing rule (.json ONLY) and will be given the option of importing all of the values or only the keys. From there, users can freely modify the keys and values and add/remove fields. 
 
 **CAUTION:** Although there is no limit to the amount of nested levels and objects, after a certain number of nested levels (~15-20) the application may begin to slow down.
 
 After completing the rule, the user can choose to either update the storage or simply download the rule. 
 
 ### Example
 
![exampleRule](https://user-images.githubusercontent.com/74830912/180623694-aa808a02-51ba-4114-bee6-330a6276c004.PNG)


  
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
