var mongoose = require('mongoose');

var emailListSchema = mongoose.Schema({
	firstname: String,
	email: String
});

var Subscriber = mongoose.model('Subscriber', emailListSchema);

module.exports = Subscriber;