
# EatNow - backend project
More Rachmani

This is the BACKEND ReadMe file.
Please follow the instructions below.
To download the Backend folder from GitHub navigate to https://github.com/More3162/finalProject.git


Project Objective:
This project is a backend system designed to manage restaurant orders, including user registration (both restaurants and customers), menu management, and order processing. The system provides an efficient way for restaurants to manage their operations and for customers to place orders online.

This is the BACKEND ReadMe file.
Please follow the instructions below.
To download the Backend folder from GitHub navigate to https://github.com/More3162/finalProject.git



## Demo

https://github.com/More3162/finalProject.git


## Features

* Data Management: Manage Bosses, Trash monsters, and User accounts.
* RESTful API: Fully functional REST API for CRUD operations.
* User Authentication: Secure user authentication using JWT and bcrypt.


## Technologies Used

* Node.js
* Express
* MongoDB
* Dependencies:
    - bcryptjs: For password hashing
    - chalk: For colored console logs
    - config: For configuration management
    - cors: For enabling Cross-Origin Resource Sharing
    - cross-env: For setting environment variables
    - dotenv: For managing environment variables
    - express: Web framework for Node.js
    - joi: For data validation
    - jsonwebtoken: For user authentication
    - lodash: Utility library for JavaScript
    - mongodb: MongoDB driver for Node.js
    - mongoose: MongoDB object modeling tool
    - morgan: HTTP request logger middleware
    - nodemon: Tool for automatically restarting the server during development

## Installation

Prerequisites

* Node.js (v14 or higher)
* MongoDB

Installation

1. Download the repository folder (via the instructions above, below the student information):

https://github.com/More3162/finalProject.git

2. Install dependencies:
    cd server
    npm install

3. Create a .env file in the root of the project and add your environment variables:

(Please note that the default MongoBD used in this project is Compass and ENVIRONMENT=development is the default choice. For ATLAS usage please change ENVIROMENT=production and provide your MongoDB URI) 

JWT_SECRET= YOUR SECRET WORD!


4. Run the server
    nodemon app

    
## Documentation

[Documentation](https://api.postman.com/collections/37374896-9cb049e5-4dde-4abf-8f55-2131f9d0e0d0?access_key=PMAT-01JAYZK0G6MMYNZKM0WGTT15HH)


## Roadmap

* Base URL: http://localhost:3000/
# Endpoints:

- Restaurant

    POST /resRegister

    POST /restaurant/resLogin

- Users

    POST /customer/register

    POST /customer/login

- menu

    POST /menu/newItem

    GET /menu/:id

    PUT /menu/:id
- Orders

    POST /order/newOrder

    GET /order/:id{resturant}

    PATCH order/:id
    
    DELETE /order/:id



## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mor-rachmani/)


## 🛠 Skills
Javascript, HTML, CSS, express, joi, jsonwebtoken, mongodb, mongoose.

## Other Common Github Profile Sections
👩‍💻 I'm currently working on FrontEnd to this Project

🧠 I'm currently learning Python

📫 How to reach me - 
050-9455553
More3031996@gmail.com


