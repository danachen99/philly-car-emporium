# Philly Car Emporium

A Full-Stack Web Application

This is a full-stack web application that follows the MVC design pattern. This specific application utilizes a third-party API (CarMD) to collect accurate car data, AJAX calls to get/post/delete data, Node for back-end, Express for routing, NodeMailer for sending emails, and MySQL for saving/deleting car data for inventory purposes. The front-end design was built with HTML, CSS, and Foundataion framework.

## User Story

•	AS A Dealership, I WANT to keep track of my inventory, SO I CAN easily manage the inventory to cater to each customer while maintaining organization.

•	AS A Dealership, I WANT to be able to display my stock to the public, SO I CAN show potential customers our active inventory availability. 

•	AS A potential car buyer, I WANT to view necessary information of a select vehicle, SO I CAN make a good decision based off of my requirements.

## Overview

This Used Car Dealership application is meant to help small dealerships keep track of their active inventory of cars, by adding new vehicles that they acquire (with vin no. input), as well as removing cars that are sold off the lot. This specific application has a database containing necessary information on the active vehicles in their inventory, using JawsDB to deploy publicly. The shopping page displays all necessary information to the buyer where they can add vehicles to their watchlist and email the dealership for an initial quote. The application also has a login page for authorized users of the dealership to log in and edit the inventory (add or delete vehicles). Additionally, an authorized user may create new credentials for their associates for future access.

## Utilizing the App

- Experience the deployed app on Heroku: [Here](https://philly-car-emporium.herokuapp.com/ "Here")
- View the repository: [Here](https://github.com/danachen99/project2 "Here")
- User is routed to the "Home" page. Here the three vehicles that have been most recently added to the lot will display. Additionally, there will be a navigation bar that contains the Shop, Dealer Login, and Watchlist tabs.
- If a user wants to 'save' a car they are interested in, they can click the 'Add to Watchlist' button for that respective car. Anytime a user wants to view their Watchlist, they can just simply click the Watchlist tab to view their favorites.
- In the Watchlist Modal, if the user would like to receive pricing information on their saved cars, they can enter their name and e-mail, and then click the 'Get Pricing' button, and their watchlist and information will then be sent to the dealership for further correspondence. Additionally, the user has the ability to clear the modal at any time they would like.
- If the user is an employee of the dealership, they can navigate to the Dealer Login page through the navigation bar. If they have access credentials, they can input them on the login page, and if accepted, they will be routed to the 'Employee View' of the inventory.
- In the 'Employe View' section of the application, the employee can enter Vin Nos. of acquired vehicles to add them to the inventory. Additionally, there are 'Delete from Inventory' buttons assigned to each card, for removal of cars from the database.
- If a new employee needs access, they can enter credentials by clicking the 'signup' link on the 'Employee View'. They will be then routed to the 'Signup' page, where they can enter an email, and password. If accepted, they will then be taken to the login page.

## Tech used

- HTML
- CSS
- Foundation
- Javascript
- jQuery
- CarMD API
- Node.js
- MySQL
- Sequelize
- JawsDB
- [https://randomvin.com/](https://randomvin.com/ "Website to Generate Random Vin Nos.")
- NPM packages
  - express
  - mysql2
  - passport
  - passport-local
  - sequelize
  - sequelize cli
  - nodeMailer
  - axios
  - bcryptjs
  - dotenv


## Contributors

- **Jordan Smith** - _Full-Stack Development_ - [Jordan Smith](https://github.com/jsmithxyz "Jordan Smith")
- **Dana Chen** - _Full-Stack Development_ - [Dana Chen](https://github.com/danachen99 "Dana Chen")
- **David Pollan** - _Full-Stack Development_ - [Dave Pollan](https://github.com/dp95000 "David Pollan")
- **Donavan Brown** - _Full-Stack Development_ - [Donavan Brown](https://github.com/dkb715 "Donavan Brown")
