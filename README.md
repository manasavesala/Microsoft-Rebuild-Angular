# _Microsoft Rebuild_

#### _Single Webpage for Epicodus,javascript Week 3 & 4 project. 01.25.2019, Updated 02.01.2019_

### By _**Manasa Vesala**_

## Description

_This is a replication of the Microsoft main page using Angular._

## MicrosoftRebuild

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Layout of the page

* _Separate application into components._
* _There will be a component with the top navbar, office, windows,surface,customer support and admin._
* _Under that there will be a component of images and products to buy that users typically visit._
* _under that there is a component that holds images and links that are in a row for shopping._
* _In nav-bar component there is a customer support page where users can contact them._
* _If you click on the names details will be appeared to contact them._
* _A an admin you can add people who serves as customer support._
* _As an admin you can edit or remove the list of contacts in customer support._
* _Footer component with links to various services, help, and 'about us' pages._

## Setup/Installation Requirements

- Webpage is deployed on Firebase -> https://rebuild-32d1a.firebaseapp.com/
- Clone this repository https://github.com/manasavesala/Microsoft-Rebuild-Angular.git
- Install Node.js
- Open Mac Terminal or Windows Command Prompt.
- Install Typescript through this command: "npm install -g typescript".
- Install Angular CLI through this command: "npm install -g @angular/cli".
- Type "cd Microsoft-Rebuild-Angular" and press enter to go to the main directory.
- Type "npm install" and press enter to install plugins and dependencies.
- Go to https://firebase.google.com/ and log in or create an account.
- Create a firebase project.
- Click on the circular gear icon next to the 'Project Overview' in the project you just created in Firebase.
  * Under the general tab, click on "Add Firebase to your web app:.
  * Copy everything inside the curly brackets of 'var config = { ... }.
- Create a file in the app folder called 'api-keys.ts'.
  * Inside the api-keys.ts file, type in 'export const masterFirebaseConfig = {}'
  * Inside the curly braces, paste what you copied earlier from Firebase.
- Click on 'Database' on the left side of Firebase console under your project and create a database. 
  * Next to the 'Database' header click on the dropdown menu and click on 'Realtime Database'.
  * Click on the icon that looks like three vertical dots under the 'Data' tab and click on 'Import JSON'.
  * Import the 'sample-exclusive-booklist.json' file inside this repo in the root folder."
  * Click on the 'Rules' tab of the database. 
  * Under rules, change the 'false' of '.read' to true.
- Type in "ng serve -o" to start the app in your Chrome browswer.

## Support and contact details

_Contact Manasa Vesala - vesalamanasa@gmail.com_

## Technologies Used

* _TypeScript_
* _node.js_
* _npm_
* _Angular 5_
* _VS Code_
* _Git_
* _GitHub_
* _HTML_
* _CSS_
* _Firebase_

## License

*This software is licensed under the MIT license.*

Copyright (c) 2019 **_Manasa Vesala_**