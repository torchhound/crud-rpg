var express = require('express');
const tools = require('../tools/tools');

var router = express.Router();

//Returns a randomly generated player character
router.get("/character", function(req, res, next){
	res.json(tools.charGen);
});

//Returns a randomly generated map
router.get("/map", function(req, res, next){
	res.json(tools.mapGen);
});

//Reads an enemy of the specified level
router.get("/enemy:level", function(req, res, next){
		//req.params.level
});

//Creates an enemy of the specified level
router.post("/enemy:level", function(req, res, next){
		
});

//Deletes an enemy with a specific id
router.delete("/enemy:id", function(req, res, next){
		
});

//Updates an enemy with a specific id
router.put("/enemy:id", function(req, res, next){
		
});

module.exports = router;