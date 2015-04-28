var express = require('express');
var router = express.Router();
var ReaderApplicant = require('../dbmodels/readerapplication');

router.post('/', function(req, res) {
	//extract the params and assign them to variables
	var applicantFirst = req.param('firstname');
	var applicantLast = req.param('lastname');
	var applicantEmail = req.param('email');
	var applicantRefCode = req.param('referralcode');
	var applicantWhy = req.param('why');
	var applicantGenres = req.param('favoritegenres');
	var referredBy = req.param('referredby');

	//create a new applicant object
	var currentApplicant = new ReaderApplicant({
		firstname: applicantFirst,
		lastname: applicantLast,
		email: applicantEmail,
		referralcode: applicantRefCode,
		why: applicantWhy,
		favoritegenres: applicantGenres,
		referredby: referredBy
	});

	//store new applicant in database
	currentApplicant.save(function(err, applicantList){
		console.log(err);
		console.log(applicantList);
	})


	//should redirect go here or inside save() method?
	res.redirect('/thank-you');

});

module.exports = router;