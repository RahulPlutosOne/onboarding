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
+ The admin should be able to create, replace, update and Destroy Vouchers.

### Functions used for above requirements:
+ signup : A controller for user/customer signup that requires username, email, password and isAdmin data from the user/customer. After hashing the password using bcrypt library the user data is then added to mySql database using sequelize ORM.
+ signin : Controller for user/customer to signin the website with their email and password. This controller verifies the authenticity of the user and then sends back a JSON web token that helps in verifying the user without asking for email and password again and again.
+ changeUsername : Controller that helps users to update his/her username after authentication.
+ changePassword : Controller that helps users to update password after authentication.
+ showVouchers : Controller that extracts all the vouchers from the excel sheets and send it as json response.
+ getVoucher : Controller for getting the data of a single voucher from the Vouchers json data and sending it as a response.
+ claimVoucher : Controller for helping the user to claim a certain voucher by sending the voucher code as a response to the voucher id received in request body.
+ addVoucher : Controller for users that has/have isAdmin property to true allowing them to add Voucher in the Vouchers excel sheet by taking voucher details in the request body.
+ updateVoucher : Controller for Admin to update a voucher details in the json format and replacing the original.
+ deleteVoucher : Controller for Admin to delete a certain voucher from the database( excel sheet ).

## Non-Functional Requirements:
### The non-functional requirements of this project are:
+ The web application should be responsive and compatible with different browsers and devices.
+ The web application should be secure and protect the user unauthorized access or modification.
+ The web application should be reliable and handle errors and exceptions
