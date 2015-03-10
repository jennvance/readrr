var express = require('express');
var router = express.Router();
var ReaderApplicant = require('../models/readerapplication');

router.post('/', function(req, res) {
	console.log(req.body);
	//extract the params and assign them to variables
	var applicantFirst = req.param('firstname');
	var applicantLast = req.param('lastname');
	var applicantEmail = req.param('email');
	var applicantRefCode = req.param('referralcode');
	var applicantWhy = req.param('why');
	var applicantBooks = req.param('favoritebooks');

	//create a new applicant object
	var currentApplicant = new ReaderApplicant({
		firstname: applicantFirst,
		lastname: applicantLast,
		email: applicantEmail,
		referralcode: applicantRefCode,
		why: applicantWhy,
		favoritebooks: applicantBooks
	});

	//store new applicant in database
	currentApplicant.save(function(err, applicantList){
		console.log(err);
		console.log(applicantList);
	})


	//does redirect go here or inside save() method?
	res.redirect('/');

});

module.exports = router;