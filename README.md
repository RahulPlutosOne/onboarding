# Onboarding

## Objective:
The objective of this project is to develop a web application that allows users/customers to claim vouchers for various purposes on plutosONE website.

## Entities:
### The main entities involved in this project are:
+ <ins> User</ins>: A person who registers an account and uses the voucher management system.
+ <ins> Voucher</ins>: A digital coupon that has a code, value, type, expiration date, and usage limit.
+ <ins> Admin</ins>: A special User with privileges for performing CRUD operations on Vouchers.

### Libraries used in this project are:
+ <ins> Express</ins> : It is a back end web application framework for building RESTful APIs with Node.js.
+ <ins> bcrypt</ins> :  A JavaScript implementation of the bcrypt password hashing function that allows you to easily create a hash out of a password string.
+ <ins> jsonwebtoken</ins> : A JSON web token(JWT) is JSON Object which is used to securely transfer information over the web(between two parties). It can be used for an authentication system and can also be used for information exchange.
+ <ins> sequelize</ins> : Sequelize is a Node. js-based Object Relational Mapper that makes it easy to work with MySQL. An Object Relational Mapper performs functions like handling database records by representing the data as objects.
+ <ins> mysql2</ins> : MySQL2 is the MySQL connector library used by Sequelize to connect to the MySQL db server.
+ <ins> xlsx</ins> : A SheetJS Spreadsheet data parser and writer. It is used to build/parse excel sheets.
+ <ins> nodemon(optional)</ins> : A tool that helps develop Node. js based applications by automatically restarting the node application when file changes in the directory are detected.

## Functional Requirements:
### The functional requirements of this project are:
+ The user should be able to register an account and log in using their email and password.
+ The user should be able to view vouchers in a list or grid view with filters and sorting options.
+ The user should be able to claim vouchers on plutosONE website.
+ The user should be able to view their transactions history.
+ The admin should be able to create, replace, update and Destroy Vouchers.

## Non-Functional Requirements:
### The non-functional requirements of this project are:
+ The web application should be responsive and compatible with different browsers and devices.
+ The web application should be secure and protect the user unauthorized access or modification.
+ The web application should be reliable and handle errors and exceptions
