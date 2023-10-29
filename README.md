# Fate Accelerated Character Manager

React Web App to store character sheets for [Fate Accelerated Edition](https://www.evilhat.com/home/fae/) 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and was built to test the functionality of React Router and Local Storage.

## Running the Project

In development - this project runs with the [Fate Character Development Server](https://github.com/GideonBrimleaf/fate_character_dev_server) in development.  Ensure you clone down this repository as well to get the project running locally.

***Note:*** this project does not support node versions >= 17 (17 introduced a loophole fix for OpenSSL which is not backwards compatible).

Until dependencies are updated you will need to be using node version less then 17 - eg:

```
$ nvm install 16
$ nvm use 16
```

### `npm install`

Download the dependencies

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Logging in
Once the app is running you will need to login.

You will need a Firebase web app and project configured for email address and passoword authentication. 

In order to set this up, `cp .env .env.local` and modify `.env.local` with your firebase config.

You will also need a DB connection string for a Realtime Firebase DB - though this is not used in development mode.

## Automated testing
The app is setup tests powered by jest.

### `npm run tests`
Runs the tests. 

You will need to update snapshots where changes have impacted the DOM output of a component or component stack.

## Testing the project with Firebase

The app will attempt to connect to Google Firebase once in production mode:

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

### `serve -s build`

This will run the production build locally, connecting to Firebase rather than the local test server.
