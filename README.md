# Peakbagger Project3

## Node/Express/React app deployed to Heroku.

See the app [here](https://project3mlebjork.herokuapp.com/)


## Starting the app locally

Start by git cloning the app. Install front and backend dependencies. While in this directory, run the following command:

```
yarn install

or 

npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
yarn dev

or 

npm run dev
```

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon. The app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

##These are the libraries, packages and technologies that I used:

MVC Paradigm folder structure
Github issues and GitKraken for project manager

###Frontend:
Spectre CSS
ReactJS
React DOM router
Axios GET, POST and PUT routes for retrieving, adding and updating data
zxcvbn npm package, a password strength estimator

###Backend:
Node and Express Web Server
MongoDB Database with a Mongoose ORM/ODM
Express routing
Deployed using Heroku (with data)
PassportJS user authentication for signup/login













