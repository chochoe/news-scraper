var mongoose = require("mongoose");

mongoose.Promise = Promise;

mongoose.connect("mongodb://heroku_b4wxznfw:ja0h8leppdgjefaqpefqflpo1@ds033186.mlab.com:33186/heroku_b4wxznfw");

var db = mongoose.connection;

db.on("error", function(error) {
	console.log("Mongoose Error: ", error);
});

db.once("open", function() {
	console.log("Mongoose conencted!")
});

module.exports = db;