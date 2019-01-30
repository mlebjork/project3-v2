const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var mongoose = require('mongoose');
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  mongoose.connect('mongodb://test:password1@ds217125.mlab.com:17125/heroku_0jcb26wg');
} else {
  mongoose.connect('mongodb://localhost/googlebooks');
}
// mongoose.connect('mongodb://test:password1@ds217125.mlab.com:17125/heroku_0jcb26wg');
// mongodb://<dbuser>:<dbpassword>@ds217125.mlab.com:17125/heroku_0jcb26wg
var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connect')
  var bookSchema = new mongoose.Schema({
    title: String,
    authors: String,
    description: String,
    image: String,
    link: String
  });
  var Book = mongoose.model('Book', bookSchema);
  var dude = new Book({
    title: `title ${Math.random()}`,
    authors: Math.random(),
    description: Math.random(),
    image: Math.random(),
    link: Math.random()
  })
  dude.save((err, dude)=>{
      if (err) return console.error(err);
  })
});


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
