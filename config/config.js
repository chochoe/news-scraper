// require mongoose
var mongoose = require('mongoose');


// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;


mongoose.connect('mongodb://heroku_b4wxznfw:ja0h8leppdgjefaqpefqflpo1@ds033186.mlab.com:33186/heroku_b4wxznfw');

var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) 
{
  console.log("Mongoose Error: ", error);
});

//Mongoose connedtion to db
db.once("open", function() 
{
  console.log("Mongoose connected!");
});

// export the database
module.exports = db;