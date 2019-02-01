//Connect to Mongo database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//your local database url
//27017 is the default mongoDB port
let uri
if (process.env.NODE_ENV !== "production") {
  uri = 'mongodb://localhost:27017/simple-mern-passport'
} else {
  uri = 'mongodb://test:password1@ds217125.mlab.com:17125/heroku_0jcb26wg'
  // uri = 'mongodb://heroku_w5rqpjcx:8j7td123ikkadp1m7pmd7n1fbj@ds019976.mlab.com:19976/heroku_w5rqpjcx'
}

mongoose.connect(uri).then(
    () => {
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
        console.log('Connected to Mongo');

    },
    err => {
         /** handle initial connection error */
         console.log('error connecting to Mongo: ')
         console.log(err);

        }
  );


module.exports = mongoose.connection