# Full-Stack User Management Web Application
This is a secure full stack web app that allows users to log in, with JWT based authentication and provides an admin panel for admin users. Admins can view, filter, and create users. I this application using React, Node.JS, Express.JS, and SQLite

## Features
- User login screen
- JWT based user authentication
- Admin Panel that provides the following functionality:
   - Viewing users
   - Filter users based in criteria e.g. username
   - Create new users
 
## Setup and Installation
- Clone the repositort using the `git clone` command
- Navigate into the project directory: `cd repo-name`
- Install Dependencies using: `npm install`
- Navigate to the backend directory: `cd Server`
- Start the backend server using the following command: `node server.js`
- Navigate to the client directory using: `cd ../Client/login-system`
- Start the frontend development server: `npm start`

The app will be running on `http://localhost:3000/`.

## How to Use
Once the user has navigated to `http://localhost:3000/` if they are not already logged in they will be brought to the login screen enter in a users credentials if you want to sign in as a user, there is currently no user content. To sign in as admin the username is `admin` and the password is also `admin`. Once the user has logged in as admin they will be brought to the admin panel and will be able to use all admin features.

## Improvements for the Future
- Add create account functionality to login screen
- Add user content e.g. Simple game or menu that allows user to enter number and that number is their score.
- More Creative UI

## Technologies Used
- Frontend: React.JS
- Backend: Node.js, Express.js
- Database: SQLite
- Authentication: Json Web Tokens (JWT)
- Version Control: Git, GitHub
- API Endpoint Testing: Postman
