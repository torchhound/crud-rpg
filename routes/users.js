var express = require('express');

var router = express.Router();

//Returns index.html
router.get("/", function(req, res, next){
	res.render("index.html");
});

module.exports = router;