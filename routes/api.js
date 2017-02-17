var express = require('express');
const bodyParser = require('body-parser');
const tools = require('../tools/tools');
const models = require('../models/models')
const MongoClient = require('mongodb').MongoClient;

var app = express();
var urlParser = bodyParser.urlencoded({ extended: true });
var router = express.Router();
var env = 'development';
var config = require('../config')[env];

var db;

MongoClient.connect(config.database.host, (error, database) => {
  	if(error) {
  		return console.log(error);
 	} else {
 		db = database;
  		console.log("DB Connection Successful!");
  	}
});

//Returns a randomly generated player character
router.get("/character", function(req, res, next){
	res.json(tools.characterGen());
});

//Returns a randomly generated map
router.get("/map", function(req, res, next){
	//res.json(tools.mapGen()); //TypeError: Converting circular structure to JSON
});

//Reads an enemy of the specified level
router.get("/enemy:level", function(req, res, next){
		//req.params.level
});

//Creates an enemy of the specified level
router.post("/enemy", urlParser, function(req, res, next){
	console.log(req);
	var enemy = models.enemy(req.body.name, req.body.race, req.body.str, req.body.int, req.body.dex, req.body.spt, req.body.level);
	console.log(enemy);
  	db.collection('enemies').insertOne(enemy, function(err, records) {
		if (err) throw err;
		if (env == 'development') console.log("Record added as " + records[0]._id);
	});
	/*
	MongoClient.connect(config.database.host, (error, db) => {
  		if(error) {
  			return console.log(error);
  		} else {
  			enemy = models.enemy(req.body.name, req.body.race, req.body.str, req.body.int, req.body.dex, req.body.spt, req.body.level);
  			db.collection('enemies').insertOne(enemy, function(err, records) {
				if (err) throw err;
				if (env == 'development') console.log("Record added as " + records[0]._id);
			});
  		}
	});*/
});

//Deletes an enemy with a specific id
router.delete("/enemy:id", function(req, res, next){
		
});

//Updates an enemy with a specific id
router.put("/enemy:id", function(req, res, next){
		
});

module.exports = router;