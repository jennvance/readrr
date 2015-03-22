var express = require('express');
var router = express.Router();
var Profile = require('../models/createprof');

router.post('/', function(req, res) {
	//assign incoming data to DB schema
	console.log("This is my new DB entry:", req.body);
	var newProfile = new Profile(req.body);
	//save in database
	newProfile.save(function(err, profileList){
		console.log(err);
		console.log(profileList);
	})
	res.send(newProfile);
	// res.redirect('/createprofile');
});

module.exports = router;