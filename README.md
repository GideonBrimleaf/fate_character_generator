# Fate Accelerated Character Manager

React Web App to store character sheets for [Fate Accelerated Edition](https://www.evilhat.com/home/fae/) 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and was built to test the functionality of React Router and Local Storage.

## Running the Project

In development - this project runs with the [Fate Character Development Server](https://github.com/GideonBrimleaf/fate_character_dev_server) in development.  Ensure you clone down this repository as well to get the project running locally.

### `npm install`

Download the dependencies

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## Testing the project with Firebase

The app will attempt to connect to Google Firebase once in production mode:

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

### `serve -s build`

This will run the production build locally, connecting to Firebase rather than the local test server.
