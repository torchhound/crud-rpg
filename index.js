const express = require('express');
const morgan = require('morgan');
const underscore = require('underscore');
const mustache = require('mustache');
const MongoClient = require('mongodb').MongoClient;
const tools = require('./tools/tools');
const api = require('./routes/api');
const users = require('./routes/users');

var env = 'development';
var config = require('./config')[env];
const port = config.server.port;
const app = express();

if(env == 'development') {
	MongoClient.connect(config.database.host, (error, database) => {
  	if(error) {
  		return console.log(error);
 	} else {
  		console.log("DB Connection Successful!");
  	}
	});
};

if (env == "development"){
	app.use(morgan('dev'));
};
app.engine('html', require('ejs').renderFile); 
app.set('view engine', 'html');
app.use('/api', api);
app.use('/', users);
app.use(express.static('views'));
app.use(function(req, res) {
	res.status(400);
    res.render("not-found.html");
 });
app.use(logError);

//Logs errors to console
function logError(error, req, res, next){
	console.log(error);
	next(error);
};

app.listen(port, function() {
	console.log("Listening on port " + port);
});

module.exports = app;