var express = require('express');
var router = express.Router();
var Subscriber = require('../dbmodels/emaillistsignup');

router.post('/', function(req, res) {
	// console.log(req.body);
	//extract the params and assign them to variables
	var emailSubscriberFirst = req.param('newfirstname');
	var emailSubscriberEmail = req.param('newemailaddress');

	//create a new subscriber object
	var newSubscriber = new Subscriber({
		firstname: emailSubscriberFirst,
		email: emailSubscriberEmail
	});
	//save in database
	newSubscriber.save(function(err, subscriberList){
		console.log(err);
		console.log(subscriberList);
	})

	res.redirect('/');
});

module.exports = router;